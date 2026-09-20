export const facts={
 original:{layers:12,encoder:6,decoder:6,hidden:512,heads:8,headDim:64,ffn:2048,parameters:65e6},
 deepseek:{layers:40,encoder:20,decoder:20,hidden:5120,heads:64,headDim:512,routedExperts:384,activeExperts:6,sharedExperts:1,expertHidden:2304,backboneParameters:552e9,engramParameters:196e9,activePrefill:8e9,activeDecode:16e9,window:128,topk:512,candidatePool:16384,cacheBytes:890,context:1048576,fullLayers:[2,8,14,20],reindexLayers:[24,28,32,36],engramLayers:[1,14],residualStreams:4,draftLayers:3,draftPositions:5},
 sources:{original:'https://arxiv.org/html/1706.03762v7',report:'https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/DeepSeek_V41_Tech_Report.pdf',config:'https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/config.json',release:'https://api-docs.deepseek.com/news/news260910/'},
};
export function modeForLayer(i){return i<2?'swa':facts.deepseek.fullLayers.includes(i)?'full':facts.deepseek.reindexLayers.includes(i)?'reindex':'reuse'}
export function compute(n){const w=Math.min(n,128);return {n,oldCache:n*6*2*512*2,newCache:n*890,prefillVisits:20*n+20*w,fullVisits:40*n,saved:1-(20*n+20*w)/(40*n)}}
