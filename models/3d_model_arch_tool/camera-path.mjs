import {cues,duration} from './story.mjs?v=2';

// Timed, shape-preserving Hermite curves keep position and velocity continuous.
function tangent(points,i,key,axis){
  if(i===0||i===points.length-1)return 0;
  const a=points[i-1],b=points[i],c=points[i+1],h0=b.time-a.time,h1=c.time-b.time;
  const d0=(b[key][axis]-a[key][axis])/h0,d1=(c[key][axis]-b[key][axis])/h1;
  if(d0*d1<=0)return 0;
  const w0=2*h1+h0,w1=h1+2*h0;
  return (w0+w1)/(w0/d0+w1/d1);
}
export function sampleCameraPath(points,time){
  const index=Math.max(0,Math.min(points.length-2,points.findLastIndex(p=>time>=p.time)));
  const a=points[index],b=points[index+1],span=b.time-a.time,u=Math.max(0,Math.min(1,(time-a.time)/span));
  const u2=u*u,u3=u2*u,result={index,progress:u};
  for(const key of ['target','offset'])result[key]=a[key].map((v,j)=>(2*u3-3*u2+1)*v+(u3-2*u2+u)*span*tangent(points,index,key,j)+(-2*u3+3*u2)*b[key][j]+(u3-u2)*span*tangent(points,index+1,key,j));
  if(a.node&&b.node&&a.node!==b.node){
    const travel=Math.hypot(...a.target.map((v,j)=>b.target[j]-v));
    const pullback=Math.min(9,Math.max(0,travel-3)*.65)*Math.sin(Math.PI*u)**2;
    result.offset[0]+=pullback*.08;result.offset[1]+=pullback*.12;result.offset[2]+=pullback;
  }
  result.from=a.node;result.to=b.node;
  return result;
}
export function buildCameraPaths(graphs,width,height){
  const aspect=width/2/height,angle=Math.tan(Math.PI/10);
  return graphs.map((graph,side)=>{
    const points=[];
    const pose=(cue,i,travel=0)=>{
      const node=graph.nodes.find(n=>n.id===cue.targets?.[side]);
      if(!node){const d=Math.max(28,9.2/(angle*aspect))*(1-travel*.025);return {node:null,target:[0,8+travel*.15,0],offset:[d*(.5+Math.sin(i*.7)*.025+travel*.025),d*.2,d]};}
      const modernAttention=side&&node.part==='attention',span=modernAttention?2.5:1.85;
      const d=Math.max(modernAttention?12.7:10.9,span/(angle*aspect))*(cue.closer?.96:1)*(1-travel*.025);
      return {node:node.id,target:[node.x+(modernAttention?.65:0),node.y+(modernAttention?.45:.25)+travel*.05,1.5],offset:[d*(.09+Math.sin(i*.9)*.04+travel*.028),d*(.07+travel*.012),d]};
    };
    cues.forEach((cue,i)=>{
      const end=cues[i+1]?.time??duration,span=end-cue.time;
      points.push({time:cue.time,...pose(cue,i)});
      points.push({time:i===cues.length-1?end:cue.time+Math.min(1.8,span*.46),...pose(cue,i,1)});
    });
    return points;
  });
}
