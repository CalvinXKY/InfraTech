# InfraTech

本仓库主要介绍AI Infra领域相关知识，内容涵盖：**训练/推理框架🧩、性能加速🚀、深度学习🧠、基础硬件🔧**等。

相关练习代码采用python语言，以notebook形式呈现，帮助读者快速了解或掌握相关内容。

# 内容介绍

**🔍主要文件**

* [./llm_infer](./llm_infer) ：推理练习
* [./docs](./docs)：AI infra共享资料

| 📜 文件名                                                                                                                         | 📖 知识分类   | 说明                                                                                                                  | 难度     |
|:-------------------------------------------------------------------------------------------------------------------------------|:----------|:--------------------------------------------------------------------------------------------------------------------|:-------|
| [chunked_prefill_and_flash_decoding.ipynb](./llm_infer)                                                                        | 推理基础      | [ChunkedPrefill&FlashDecoding原理详解](https://zhuanlan.zhihu.com/p/1988996116017086993)                                | ⚡️⚡️   |
| [attention_mla_flops_with_prefix_cache.ipynb](./llm_infer)                                                                     | 推理基础      | [prefix cache为何零开销](https://zhuanlan.zhihu.com/p/1896927732027335111)                                               | ⚡️⚡️   |
| [ulysses_mha_demo.ipynb](./llm_infer)                                                                                          | 并行推理      | [推理Ulysses并行优化](https://zhuanlan.zhihu.com/p/1995776941110878482)                                                   | ⚡️     |
| [LLM_sampling.ipynb](./llm_infer)                                                                                              | 推理基础      | [LLM推理采样(Sampling)](https://zhuanlan.zhihu.com/p/1981752176578667658)                                               | ⚡️     |
| [speculative_decoding.ipynb](./llm_infer)                                                                                      | 推理基础      | [投机推理的原理与常见方案](https://zhuanlan.zhihu.com/p/1978037808544370747)                                                    | ⚡️     |
| [zmq_practice.ipynb](./llm_infer)                                                                                              | 推理基础      | -                                                                                                                   | ⚡️     |
| [nondeterministic_reduction.ipynb](https://github.com/CalvinXKY/BasicCUDA/blob/master/triton/nondeterministic_reduction.ipynb) | 推理基础      | [推理的非确定性运算](https://zhuanlan.zhihu.com/p/1997403964413608619)                                                       | ⚡️     |
| [kv_cache_transfer_vs_recomputation.ipynb](./llm_infer)                                                                        | 推理基础      | [KV cache用池化的数据会比重算更快吗？](https://www.zhihu.com/question/1954115162412942829/answer/1964780161137381481)             | ⚡️⚡️   |
| [linear_attention_kv_cache_size.ipynb](./llm_infer)                                                                            | 推理基础      | [LinearAttention在KV cache的存储上有多大优势？](https://www.zhihu.com/question/1974064489159730057/answer/1974067690864928547) | ⚡️     |
| [vllm_basic_scheduler.ipynb](./llm_infer)                                                                                      | vLLM      | [手搓一个基础调度器](https://zhuanlan.zhihu.com/p/1988193790129902960)                                                       | ⚡️⚡️   |
| [sglang_radix_attention.ipynb](./llm_infer)                                                                                    | SGLang    | [手撕RadixAttention](https://zhuanlan.zhihu.com/p/1994495318197305400)                                                | ⚡️⚡️   |
| [LoRA_to_Multi_LoRA.ipynb](./multi_lora)                                                                                       | 训推基础      | [从LoRA到Multi-LoRA](https://zhuanlan.zhihu.com/p/1984729458444363168)                                                | ⚡️⚡️   |
| [mini_dl_framework.ipynb](./deeplearning_framework)                                                                            | 训练框架      | [从零实现MLP训练全流程](https://zhuanlan.zhihu.com/p/1988895482320266895)                                                    | ⚡️⚡️   |
| [pytorch_vista_deepseekV3.ipynb](./pytorch_vista)                                                                              | PyTorch   | [PyTorch结构可视化](https://zhuanlan.zhihu.com/p/1977414887736112704)                                                    | ⚡️     |
| [MLA_diff_mode_mfu_calculation.ipynb](./deepseek_v3)                                                                           | Attention | [超细图解MLA计算流&吸收矩阵对比分析](https://zhuanlan.zhihu.com/p/1948769945132470860)                                             | ⚡️⚡️⚡️ |

## 🤖 推理基础知识与框架

| 📚  文章                                                                                                              | 📖 知识分类 | 📜 备注                                                       |
|:--------------------------------------------------------------------------------------------------------------------|:--------|:------------------------------------------------------------|
| [入门知识：大模型推理核心概念与术语总结](https://zhuanlan.zhihu.com/p/1983137653336585901)                                             | 推理基础    | 🔥🔥🔥                                                      |
| [入门知识：LLM推理并行优化的必备知识](https://zhuanlan.zhihu.com/p/1937449564509545940)                                             | 推理基础    | 🔥🔥🔥                                                      |
| [入门知识：从LoRA到Multi-LoRA：原理&代码实践](https://zhuanlan.zhihu.com/p/1984729458444363168)                                   | 推理基础    | [练习](./multi_lora/LoRA_to_Multi_LoRA.ipynb)                 |
| [入门知识：ChunkedPrefill&FlashDecoding原理详解](https://zhuanlan.zhihu.com/p/1988996116017086993)                           | 推理基础    | [练习](./llm_infer/chunked_prefill_and_flash_decoding.ipynb)  |
| [入门知识：LLM推理采样(Sampling)常见知识概览](https://zhuanlan.zhihu.com/p/1981752176578667658)                                    | 推理基础    | 🔥                                                          |
| [入门知识：Speculative Decoding投机推理的原理与常见方案](https://zhuanlan.zhihu.com/p/1978037808544370747)                           | 推理基础    | 🔥                                                          |
| [入门知识：推理的非确定性运算](https://zhuanlan.zhihu.com/p/1997403964413608619)                                                  | 推理基础    | 🔥                                                          |
| [vLLM(一)：vLLM框架快速入门引导](https://zhuanlan.zhihu.com/p/1984742841528902530)                                            | vLLM    | 🔥🔥🔥🚀                                                    |
| [vLLM(二)：vLLM Scheduler逻辑难啃？先手搓一个基础调度器](https://zhuanlan.zhihu.com/p/1988193790129902960)                           | vLLM    | [练习](./llm_infer/vllm_basic_scheduler.ipynb)                |
| [SGLang(一)：看不懂SGLang?先试试miniSGLang！](https://zhuanlan.zhihu.com/p/1986026310913528033)                              | SGLang  | 🔥🔥                                                        |
| [SGLang(二)：手撕SGLang KV Cache核心逻辑：快速理解RadixAttention](https://zhuanlan.zhihu.com/p/1994495318197305400)              | SGLang  | [练习](./llm_infer/sglang_radix_attention.ipynb)              |
| [vLLM(三)：vLLM显存管理详解](https://zhuanlan.zhihu.com/p/1916529253169734444)                                              | vLLM    | 🔥🔥                                                        |
| [vLLM(四)：核心模块：vLLM V1 KV cache 管理机制剖析](https://zhuanlan.zhihu.com/p/1954128446398633139)                            | vLLM    | 🔥🔥                                                        |
| [vLLM(五)：vLLM V1 Scheduler的调度逻辑&优先级分析](https://zhuanlan.zhihu.com/p/1900957007575511876)                            | vLLM    | 🔥                                                          |
| [vLLM(六)：vLLM框架V1演进分析](https://zhuanlan.zhihu.com/p/1894423873145004335)                                            | vLLM    | 🔥🔥🔥                                                      |
| [vLLM(七)：vLLM的prefix cache为何零开销](https://zhuanlan.zhihu.com/p/1896927732027335111)                                  | vLLM    | 🔥🔥🔥                                                      |
| [vLLM(八)：vLLM DP特性与演进方案分析](https://zhuanlan.zhihu.com/p/1909265969823580330)                                        | vLLM    | 🔥                                                          |
| [vLLM(九)：LLM推理数据并行负载均衡(DPLB)浅析](https://zhuanlan.zhihu.com/p/1927317160889386326)                                   | vLLM    | 🔥🔥🔥                                                      |
| [PD分离（一）：vLLM PD分离方案浅析](https://zhuanlan.zhihu.com/p/1889243870430201414)                                           | 特性      | 🔥🔥🔥 🚀                                                   |
| [PD分离（二）：vLLM PD分离KV cache传递机制详解与演进分析](https://zhuanlan.zhihu.com/p/1906741007606878764)                            | 特性      | 🔥🔥🔥                                                      |
| [AF分离：Attention与FFN分离(AFD)方案解析 ](https://zhuanlan.zhihu.com/p/1952393747112367273)                                  | 特性      | 🔥🔥                                                        |
| [关键特性EPLB：MoE并行负载均衡，EPLB的深度解析与可视化](https://zhuanlan.zhihu.com/p/29963005584)                                        | 特性      | 🔥🔥                                                        |
| [关键特性FlashMLA：深度解析FlashMLA，一文读懂大模型加速新利器](https://zhuanlan.zhihu.com/p/27976368445)                                  | 特性      | 🔥🔥                                                        |
| [推理框架适配Kimi/QwenNext线性注意力:方案&公式&代码](https://zhuanlan.zhihu.com/p/1971883340031328850)                               | 扩展知识    | 🔥                                                          |
| [LinearAttention在KV cache的存储上有多大优势？](https://www.zhihu.com/question/1974064489159730057/answer/1974067690864928547) | 扩展知识    | 🔥🔥                                                        |
| [如何评价Nvidia发布的大模型推理PD分离架构Dynamo？](https://www.zhihu.com/question/15465759171/answer/129570965681)                   | 扩展知识    | 🔥🔥                                                        |
| [KV cache用池化的数据会比重算更快吗？](https://www.zhihu.com/question/1954115162412942829/answer/1964780161137381481)             | 扩展知识    | 🔥 [练习](llm_infer/kv_cache_transfer_vs_recomputation.ipynb) |

## 🚀 推理提速经验分享

| 📚  文章                                                                                     | 📖 知识分类 |
|:-------------------------------------------------------------------------------------------|:--------|
| [推理性能优化：GPU/NPU Profiling阅读引导](https://zhuanlan.zhihu.com/p/1981436859470074335)           | 基础知识    | 
| [推理性能优化：分布式推理优化思路](https://zhuanlan.zhihu.com/p/1937556222371946860)                       | 基础知识    |
| [1.5x提升:PD分离KV cache传输的实践经验](https://zhuanlan.zhihu.com/p/1946608360259577576)             | vLLM    |
| [1.3x提升:LLM推理优化:MLA算力均衡实践](https://zhuanlan.zhihu.com/p/1950677392017330369)               | vLLM    | 
| [3.0x提升:推理Ulysses并行优化与DeepSeekV3/V3.2实践](https://zhuanlan.zhihu.com/p/1995776941110878482) | vLLM    | 
| [1.3x提升:vLLM推理的Swap特性实践](https://zhuanlan.zhihu.com/p/1999536171961828862)                 | vLLM    |

## 🛠️辅助工具

| 📚 文章                                                                             | 📖 知识分类 | 🌐 链接                                                                                 |
|:----------------------------------------------------------------------------------|:--------|:--------------------------------------------------------------------------------------|
| [LLM大模型显存计算公式与优化](https://zhuanlan.zhihu.com/p/687226668)                         | LLM     | 🔥🔥🔥                                                                                |
| [LLM预训练模型MFU计算器](https://zhuanlan.zhihu.com/p/20401860293)                        | LLM     | [link](https://calvinxky.github.io/mfu_calculation/)                                  |
| [DeepSeekV3 MFU计算工具与算式](https://zhuanlan.zhihu.com/p/26107304514)                 | LLM     | [link](https://calvinxky.github.io/mfu_calculation/deepseek3mfu.html)                 |
| [PyTorch显存可视化与Snapshot数据分析](https://zhuanlan.zhihu.com/p/677203832)               | PyTorch | [link](https://github.com/CalvinXKY/BasicCUDA/tree/master/pytorch/torch_mem_snapshot) |
| [PyTorch结构可视化：交互式DeepSeekV3计算图](https://zhuanlan.zhihu.com/p/1977414887736112704) | PyTorch | [link](./pytorch_vista)                                                               |

## 训练框架与基础知识

| 📚  文章                                                                                                                | 📖 知识分类 | 📜 备注                                                                                          |
|:----------------------------------------------------------------------------------------------------------------------|:--------|:-----------------------------------------------------------------------------------------------|
| [入门知识：如何快速理解PyTorch自动梯度（Autograd）的原理？](https://www.zhihu.com/question/1981438452038922346/answer/1988169697171100179) | 训练框架    | [练习](./deeplearning_framework/mini_dl_framework.ipynb)                                         |
| [不用 PyTorch从零实现MLP训练全流程](https://zhuanlan.zhihu.com/p/1988895482320266895)                                            | 训练框架    | [练习](./deeplearning_framework)                                                                 |
| [PyTorch显存管理介绍与源码解析（一）](https://zhuanlan.zhihu.com/p/680769942)                                                       | 训练框架    | [link](https://github.com/CalvinXKY/BasicCUDA/tree/master/pytorch/torch1.13_mem_rationale)     |
| [PyTorch显存管理介绍与源码解析（二）](https://zhuanlan.zhihu.com/p/681651660)                                                       | 训练框架    | [link](https://github.com/CalvinXKY/BasicCUDA/tree/master/pytorch/torch1.13_mem_rationale)[]() |
| [PyTorch显存管理介绍与源码解析（三）](https://zhuanlan.zhihu.com/p/692614846)                                                       | 训练框架    | 🔥                                                                                             |
| [PyTorch分布式训练基础--DDP使用](https://zhuanlan.zhihu.com/p/358974461)                                                       | 训练框架    | 🔥🔥🔥                                                                                         |
| [Context Parallelism的原理与代码浅析](https://zhuanlan.zhihu.com/p/698447429)                                                 | 并行训练    | 🔥🔥🔥                                                                                         | 
| [图解Infra视角下的强化学习性能问题(浅析)](https://zhuanlan.zhihu.com/p/1986888818738086656)                                           | RL训练    | 🔥                                                                                             |
| [FP8计算在模型训练中的应用](https://zhuanlan.zhihu.com/p/26825649731)                                                            | 量化训练    | 🔥                                                                                             |

## 深度学习&大模型知识

| 📚  文章                                                                                                             | 📖 知识分类     | 📜 备注                                                     |
|:-------------------------------------------------------------------------------------------------------------------|:------------|:----------------------------------------------------------|
| [超细图解MLA计算流&吸收矩阵对比分析](https://zhuanlan.zhihu.com/p/1948769945132470860)                                            | Attention   | [高清图](./deepseek_v3)                                      |
| [超细图解DSA计算流&性能对比与优化分析](https://zhuanlan.zhihu.com/p/1963371483985319543)                                           | Attention   | [高清图](./deepseek_v3)                                      |
| [用注意力知识分析DSA(DeepSeek Sparse Attention)的设计逻辑](https://zhuanlan.zhihu.com/p/1962162900111172920)                    | Attention   | 🔥🔥                                                      |
| [线性注意力(LinearAttention)的原理与细节(AlphaDeltaGate)解析](https://zhuanlan.zhihu.com/p/1969419528065773811)                 | Linear      | 🔥                                                        |
| [入门基础：手写最基础的训练过程](https://zhuanlan.zhihu.com/p/687327516)                                                          | 深度学习        | 🔥                                                        |
| [入门基础：梯度近似运算与雅可比(Jacobian)矩阵](https://zhuanlan.zhihu.com/p/687815257)                                              | 深度学习        | -                                                         |
| [入门基础：Transformer基础模型代码实现--极简版(One-Page)](https://zhuanlan.zhihu.com/p/691126108)                                  | Transformer | [link](https://github.com/CalvinXKY/transformer_one_page) |
| [Query和Key在注意力机制中长得几乎一模一样，为什么还要分开?](https://www.zhihu.com/question/1934742507746464833/answer/1961698275406096016) | Transformer | 🔥                                                        |
| [为什么transformer的FFN需要先升维再降维？](https://www.zhihu.com/question/665731716/answer/1965427268001183164)                 | Transformer | 🔥🔥                                                      |
| [为什么线性注意力中K头数小于V头数？](https://www.zhihu.com/question/1978396956591141184/answer/1978404558473549228)                | Linear      | 🔥                                                        |
| [AI模型优化的必修课：参数搜索/自动调优](https://zhuanlan.zhihu.com/p/1991878121566279093)                                           | 深度学习        | 🔥                                                        |

## GPU基础知识

### [**BasicCUDA:**](https://github.com/CalvinXKY/BasicCUDA)

[https://github.com/CalvinXKY/BasicCUDA](https://github.com/CalvinXKY/BasicCUDA)

### 🎉🎉🎉：**20+知识分享，涵盖CUDA、NCCL、PyTorch、GPU硬件知识**

**[作者kaiyuan知乎主页🥳](https://www.zhihu.com/people/xky7)** https://www.zhihu.com/people/xky7

### **zhilink:**

<p align="center">
  <img src="kaiyuan_qr_code.png" alt="公众号二维码"  width="30%" />
</p>

### 学习更多AI Infra知识，荐关注公众号: **InfraTech**

<p align="center">
  <img src="infra_tech_qr_code.jpg" alt="公众号二维码" />
</p>
