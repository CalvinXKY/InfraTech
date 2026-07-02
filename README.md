# InfraTech

本仓库主要介绍AI Infra领域相关知识，内容涵盖：**训练/推理框架🧩、性能加速🚀、深度学习🧠、基础硬件🔧**等。

相关练习代码采用Python语言，以notebook形式呈现，帮助读者快速了解或掌握相关内容。

# 内容介绍

**🔍主要文件**

* [./llm_infer](./llm_infer)：推理练习
* [./models](./models)：主流模型介绍
* [./docs](./docs)：AI Infra共享资料

| 📜 文件名                                                                                                                         | 📖 知识分类     | 说明                                                                                                                  | 难度     |
|:-------------------------------------------------------------------------------------------------------------------------------|:------------|:--------------------------------------------------------------------------------------------------------------------|:-------|
| [MLA_diff_mode_mfu_calculation.ipynb](./deepseek_v3)                                                                           | Attention   | [超细图解MLA计算流&吸收矩阵对比分析](https://zhuanlan.zhihu.com/p/1948769945132470860)                                             | ⚡️⚡️⚡️ |
| [rope_principle.ipynb](./models/modules/rope_principle.ipynb)                                                                  | Attention   | [彻底搞懂RoPE计算原理：从1D到3D](https://zhuanlan.zhihu.com/p/2023493768003724514)                                             | ⚡️⚡️⚡️ |
| [collective_operations.ipynb](./deeplearning_framework)                                                                        | 分布式基础       | [分布式训练/推理基础：集合通信原理与实践](https://zhuanlan.zhihu.com/p/2006011081177457311)                                            | ⚡️     |
| [chunked_prefill_and_flash_decoding.ipynb](./llm_infer)                                                                        | 推理基础        | [ChunkedPrefill&FlashDecoding原理详解](https://zhuanlan.zhihu.com/p/1988996116017086993)                                | ⚡️⚡️   |
| [attention_mla_flops_with_prefix_cache.ipynb](./llm_infer)                                                                     | 推理基础        | [prefix cache为何零开销](https://zhuanlan.zhihu.com/p/1896927732027335111)                                               | ⚡️⚡️   |
| [parallel_strategies.ipynb](./llm_infer)                                                                                       | 并行推理        | [大模型推理并行策略(DP/TP/PP/SP/EP)原理简介](https://zhuanlan.zhihu.com/p/2003423046342554380)                                   | ⚡️     |
| [ulysses_mha_demo.ipynb](./llm_infer)                                                                                          | 并行推理        | [推理Ulysses并行优化](https://zhuanlan.zhihu.com/p/1995776941110878482)                                                   | ⚡️     |
| [LLM_sampling.ipynb](./llm_infer)                                                                                              | 推理基础        | [LLM推理采样(Sampling)](https://zhuanlan.zhihu.com/p/1981752176578667658)                                               | ⚡️     |
| [speculative_decoding.ipynb](./llm_infer)                                                                                      | 推理基础        | [投机推理的原理与常见方案](https://zhuanlan.zhihu.com/p/1978037808544370747)                                                    | ⚡️     |
| [zmq_practice.ipynb](./llm_infer)                                                                                              | 推理基础        | -                                                                                                                   | ⚡️     |
| [nondeterministic_reduction.ipynb](https://github.com/CalvinXKY/BasicCUDA/blob/master/triton/nondeterministic_reduction.ipynb) | 推理基础        | [推理的非确定性运算](https://zhuanlan.zhihu.com/p/1997403964413608619)                                                       | ⚡️     |
| [kv_cache_transfer_vs_recomputation.ipynb](./llm_infer)                                                                        | 推理基础        | [KV cache用池化的数据会比重算更快吗？](https://www.zhihu.com/question/1954115162412942829/answer/1964780161137381481)             | ⚡️⚡️   |
| [linear_attention_kv_cache_size.ipynb](./llm_infer)                                                                            | 推理基础        | [LinearAttention在KV cache的存储上有多大优势？](https://www.zhihu.com/question/1974064489159730057/answer/1974067690864928547) | ⚡️     |
| [quantization.ipynb](./llm_infer)                                                                                              | 推理基础        | [大模型推理量化(Quantization)基础速览](https://zhuanlan.zhihu.com/p/2005335401469083798)                                        | ⚡️     |
| [nano_vllm.ipynb](./llm_infer)                                                                                                 | Nano-vLLM   | [推理框架极简入门：用Nano-vLLM搭建知识体系](https://zhuanlan.zhihu.com/p/2008285806222132143)                                       | ⚡️     |
| [vllm_basic_scheduler.ipynb](./llm_infer)                                                                                      | vLLM        | [手搓一个基础调度器](https://zhuanlan.zhihu.com/p/1988193790129902960)                                                       | ⚡️⚡️   |
| [sglang_radix_attention.ipynb](./llm_infer)                                                                                    | SGLang      | [手撕RadixAttention](https://zhuanlan.zhihu.com/p/1994495318197305400)                                                | ⚡️⚡️   |
| [sglang_profiling_from_scratch.ipynb](./llm_infer)                                                                             | SGLang      | [SGLang Profiling数据采集与分析入门](https://zhuanlan.zhihu.com/p/2004605638760763526)                                       | ⚡️     |
| [vllm_mem_snapshot.ipynb](./llm_infer)                                                                                         | vLLM        | [vLLM显存可视化与管理详解](https://zhuanlan.zhihu.com/p/1916529253169734444)                                                  | ⚡️     |
| [switch_role_update_weights.ipynb](./llm_infer)                                                                                | SGLang/vLLM | [降低RL训推共卡开销：SGLang/vLLM的无缝切换实现与分析](https://zhuanlan.zhihu.com/p/2002748926185469778)                                | ⚡️     |
| [cuda_graph.ipynb](./llm_infer)                                                                                                | 扩展知识        | [vLLM为什么没在prefill阶段支持cuda graph？](https://www.zhihu.com/question/7987565201/answer/2012589977544991690)             | ⚡️     |
| [LoRA_to_Multi_LoRA.ipynb](./multi_lora)                                                                                       | 训推基础        | [从LoRA到Multi-LoRA](https://zhuanlan.zhihu.com/p/1984729458444363168)                                                | ⚡️⚡️   |
| [mini_dl_framework.ipynb](./deeplearning_framework)                                                                            | 训练框架        | [从零实现MLP训练全流程](https://zhuanlan.zhihu.com/p/1988895482320266895)                                                    | ⚡️⚡️   |
| [pytorch_vista_deepseekV3.ipynb](./pytorch_vista)                                                                              | PyTorch     | [PyTorch结构可视化](https://zhuanlan.zhihu.com/p/1977414887736112704)                                                    | ⚡️     |
| [torch_process_share_tensor.ipynb](./deeplearning_framework/torch_process_share_tensor.ipynb)                                  | PyTorch     | [PyTorch中基于CUDA IPC的进程间Tensor共享简介](https://zhuanlan.zhihu.com/p/2019510762004050171)                                | ⚡️     |
| [training_infer_colocate.ipynb](./rl)                                                                                          | RL基础        | [RL训推调度与切换（Megatron⇄SGLang）机制解析](https://zhuanlan.zhihu.com/p/2028552054742763264)                                | ⚡️     |

## 🤖 推理基础知识与框架

| 📚  文章                                                                                                              | 📖 知识分类   | 📜 备注                                                       |
|:--------------------------------------------------------------------------------------------------------------------|:----------|:------------------------------------------------------------|
| [入门知识：大模型推理核心概念与术语总结](https://zhuanlan.zhihu.com/p/1983137653336585901)                                             | 推理基础      | 🔥🔥🔥                                                      |
| [入门知识：大模型推理并行策略(DP/TP/PP/SP/EP)原理简介](https://zhuanlan.zhihu.com/p/2003423046342554380)                              | 推理基础      | [练习](llm_infer/parallel_strategies.ipynb)                   |
| [入门知识：LLM推理并行优化的必备知识](https://zhuanlan.zhihu.com/p/1937449564509545940)                                             | 推理基础      | 🔥🔥🔥                                                      |
| [入门知识：从LoRA到Multi-LoRA：原理&代码实践](https://zhuanlan.zhihu.com/p/1984729458444363168)                                   | 推理基础      | [练习](./multi_lora/LoRA_to_Multi_LoRA.ipynb)                 |
| [入门知识：ChunkedPrefill&FlashDecoding原理详解](https://zhuanlan.zhihu.com/p/1988996116017086993)                           | 推理基础      | [练习](./llm_infer/chunked_prefill_and_flash_decoding.ipynb)  |
| [入门知识：LLM推理采样(Sampling)常见知识概览](https://zhuanlan.zhihu.com/p/1981752176578667658)                                    | 推理基础      | 🔥                                                          |
| [入门知识：Speculative Decoding投机推理的原理与常见方案](https://zhuanlan.zhihu.com/p/1978037808544370747)                           | 推理基础      | 🔥                                                          |
| [入门知识：推理的非确定性运算](https://zhuanlan.zhihu.com/p/1997403964413608619)                                                  | 推理基础      | 🔥                                                          |
| [入门知识：大模型推理量化(Quantization)基础速览](https://zhuanlan.zhihu.com/p/2005335401469083798)                                   | 推理基础      | [练习](llm_infer/quantization.ipynb)                          |
| [Nano-vLLM架构介绍](https://zhuanlan.zhihu.com/p/2010638958783131701)                                                   | Nano-vLLM | 🔥🔥                                                        |
| [推理框架极简入门：用Nano-vLLM搭建知识体系](https://zhuanlan.zhihu.com/p/2008285806222132143)                                       | Nano-vLLM | [练习](llm_infer/nano_vllm.ipynb)                             |
| [vLLM(一)：vLLM框架快速入门引导](https://zhuanlan.zhihu.com/p/1984742841528902530)                                            | vLLM      | 🔥🔥🔥🚀                                                    |
| [vLLM(二)：vLLM Scheduler逻辑难啃？先手搓一个基础调度器](https://zhuanlan.zhihu.com/p/1988193790129902960)                           | vLLM      | [练习](./llm_infer/vllm_basic_scheduler.ipynb)                |
| [SGLang(一)：看不懂SGLang?先试试miniSGLang！](https://zhuanlan.zhihu.com/p/1986026310913528033)                              | SGLang    | 🔥🔥                                                        |
| [SGLang(二)：手撕SGLang KV Cache核心逻辑：快速理解RadixAttention](https://zhuanlan.zhihu.com/p/1994495318197305400)              | SGLang    | [练习](./llm_infer/sglang_radix_attention.ipynb)              |
| [SGLang(三)：Profiling数据采集与分析入门](https://zhuanlan.zhihu.com/p/2004605638760763526)                                    | SGLang    | [练习](llm_infer/sglang_profiling_from_scratch.ipynb)         |
| [vLLM(三)：vLLM显存管理详解](https://zhuanlan.zhihu.com/p/1916529253169734444)                                              | vLLM      | 🔥[代码](./llm_infer/vllm_mem_snapshot.ipynb)                 |
| [vLLM(四)：核心模块：vLLM V1 KV cache 管理机制剖析](https://zhuanlan.zhihu.com/p/1954128446398633139)                            | vLLM      | 🔥🔥                                                        |
| [vLLM(五)：vLLM V1 Scheduler的调度逻辑&优先级分析](https://zhuanlan.zhihu.com/p/1900957007575511876)                            | vLLM      | 🔥                                                          |
| [vLLM(六)：vLLM框架V1演进分析](https://zhuanlan.zhihu.com/p/1894423873145004335)                                            | vLLM      | 🔥🔥🔥                                                      |
| [vLLM(七)：vLLM的prefix cache为何零开销](https://zhuanlan.zhihu.com/p/1896927732027335111)                                  | vLLM      | 🔥🔥🔥                                                      |
| [vLLM(八)：vLLM DP特性与演进方案分析](https://zhuanlan.zhihu.com/p/1909265969823580330)                                        | vLLM      | 🔥                                                          |
| [vLLM(九)：LLM推理数据并行负载均衡(DPLB)浅析](https://zhuanlan.zhihu.com/p/1927317160889386326)                                   | vLLM      | 🔥🔥🔥                                                      |
| [PD分离（一）：vLLM PD分离方案浅析](https://zhuanlan.zhihu.com/p/1889243870430201414)                                           | 特性        | 🔥🔥🔥 🚀                                                   |
| [PD分离（二）：vLLM PD分离KV cache传递机制详解与演进分析](https://zhuanlan.zhihu.com/p/1906741007606878764)                            | 特性        | 🔥🔥🔥                                                      |
| [AF分离：Attention与FFN分离(AFD)方案解析](https://zhuanlan.zhihu.com/p/1952393747112367273)                                  | 特性        | 🔥🔥                                                        |
| [关键特性EPLB：MoE并行负载均衡，EPLB的深度解析与可视化](https://zhuanlan.zhihu.com/p/29963005584)                                        | 特性        | 🔥🔥                                                        |
| [关键特性FlashMLA：深度解析FlashMLA，一文读懂大模型加速新利器](https://zhuanlan.zhihu.com/p/27976368445)                                  | 特性        | 🔥🔥                                                        |
| [降低RL训推共卡开销：SGLang/vLLM的无缝切换实现与分析](https://zhuanlan.zhihu.com/p/2002748926185469778)                                | 特性        | 🔥🔥                                                        |
| [推理框架适配Kimi/QwenNext线性注意力:方案&公式&代码](https://zhuanlan.zhihu.com/p/1971883340031328850)                               | 扩展知识      | 🔥                                                          |
| [LinearAttention在KV cache的存储上有多大优势？](https://www.zhihu.com/question/1974064489159730057/answer/1974067690864928547) | 扩展知识      | 🔥🔥                                                        |
| [如何评价NVIDIA发布的大模型推理PD分离架构Dynamo？](https://www.zhihu.com/question/15465759171/answer/129570965681)                   | 扩展知识      | 🔥🔥                                                        |
| [KV cache用池化的数据会比重算更快吗？](https://www.zhihu.com/question/1954115162412942829/answer/1964780161137381481)             | 扩展知识      | 🔥 [练习](llm_infer/kv_cache_transfer_vs_recomputation.ipynb) |
| [vLLM为什么没在prefill阶段支持cuda graph？](https://www.zhihu.com/question/7987565201/answer/2012589977544991690)             | 扩展知识      | 🔥 [代码](llm_infer/cuda_graph.ipynb)                         |

## 🚀 推理提速经验分享

| 📚  文章                                                                                     | 📖 知识分类 |
|:-------------------------------------------------------------------------------------------|:--------|
| [推理性能优化：GPU/NPU Profiling阅读引导](https://zhuanlan.zhihu.com/p/1981436859470074335)           | 基础知识    |
| [推理性能优化：分布式推理优化思路](https://zhuanlan.zhihu.com/p/1937556222371946860)                       | 基础知识    |
| [1.5x提升:PD分离KV cache传输的实践经验](https://zhuanlan.zhihu.com/p/1946608360259577576)             | vLLM    |
| [1.3x提升:LLM推理优化:MLA算力均衡实践](https://zhuanlan.zhihu.com/p/1950677392017330369)               | vLLM    |
| [3.0x提升:推理Ulysses并行优化与DeepSeekV3/V3.2实践](https://zhuanlan.zhihu.com/p/1995776941110878482) | vLLM    |
| [1.3x提升:vLLM推理的Swap特性实践](https://zhuanlan.zhihu.com/p/1999536171961828862)                 | vLLM    |
| [PD分离+弹性伸缩/角色切换的实践笔记](https://zhuanlan.zhihu.com/p/2026227681419600454)                 | vLLM    |

## RL框架

| 📚  文章                                                                                           | 📖 知识分类 | 📜 备注                                              |
|:-------------------------------------------------------------------------------------------------|:--------|:---------------------------------------------------|
| [vime：融合slime与vLLM的RL框架](https://zhuanlan.zhihu.com/p/2047767807237141302)                       | vime    | 🔥🔥                                               |
| [vime×Ascend：共卡模式适配与实践](https://zhuanlan.zhihu.com/p/2050254430709272722)                        | vime    | 🔥                                                 |
| [MoE-RL训推一致性：R3原理与性能验证](https://zhuanlan.zhihu.com/p/2052417693177864733)                       | vime    | 🔥🔥                                               |
| [vime+MemAgent：记忆智能体的RL后训练](https://zhuanlan.zhihu.com/p/2052871664728380768)                    | vime    | 🔥                                                 |
| [教你训一个会调用工具的Agent：RL τ-bench](https://zhuanlan.zhihu.com/p/2053877694224392348)                  | vime    | 🔥                                                 |
| [Slime适配vLLM后端的实践笔记](https://zhuanlan.zhihu.com/p/2033132330064285846)                            | slime   | 🔥                                                 |
| [RL共卡权重同步：vLLM与训练框架之间的IPC实践](https://zhuanlan.zhihu.com/p/2044116178860298908)                  | 权重同步    | 🔥                                                 |
| [Slime非共卡下的权重同步优化：P2P分片](https://zhuanlan.zhihu.com/p/2055241439756525802)                      | 权重同步    | 🔥                                                 |
| [图解Infra视角下的强化学习性能问题(浅析)](https://zhuanlan.zhihu.com/p/1986888818738086656)                     | RL基础    | 🔥                                                 |
| [RL训推调度与切换（Megatron⇄SGLang）机制解析](https://zhuanlan.zhihu.com/p/2028552054742763264)                | RL基础    | 🔥 [练习](./rl/training_infer_colocate.ipynb)        |

## 训练框架与基础知识

| 📚  文章                                                                                                                | 📖 知识分类 | 📜 备注                                                                                          |
|:----------------------------------------------------------------------------------------------------------------------|:--------|:-----------------------------------------------------------------------------------------------|
| [入门知识：如何快速理解PyTorch自动梯度（Autograd）的原理？](https://www.zhihu.com/question/1981438452038922346/answer/1988169697171100179) | 训练框架    | [练习](./deeplearning_framework/mini_dl_framework.ipynb)                                         |
| [不用PyTorch从零实现MLP训练全流程](https://zhuanlan.zhihu.com/p/1988895482320266895)                                            | 训练框架    | [练习](./deeplearning_framework)                                                                 |
| [PyTorch显存管理介绍与源码解析（一）](https://zhuanlan.zhihu.com/p/680769942)                                                       | 训练框架    | [link](https://github.com/CalvinXKY/BasicCUDA/tree/master/pytorch/torch1.13_mem_rationale)     |
| [PyTorch显存管理介绍与源码解析（二）](https://zhuanlan.zhihu.com/p/681651660)                                                       | 训练框架    | [link](https://github.com/CalvinXKY/BasicCUDA/tree/master/pytorch/torch1.13_mem_rationale)     |
| [PyTorch显存管理介绍与源码解析（三）](https://zhuanlan.zhihu.com/p/692614846)                                                       | 训练框架    | 🔥                                                                                             |
| [PyTorch分布式训练基础--DDP使用](https://zhuanlan.zhihu.com/p/358974461)                                                       | 训练框架    | 🔥🔥🔥                                                                                         |
| [Context Parallelism的原理与代码浅析](https://zhuanlan.zhihu.com/p/698447429)                                                 | 并行训练    | 🔥🔥🔥                                                                                         |
| [FP8计算在模型训练中的应用](https://zhuanlan.zhihu.com/p/26825649731)                                                            | 量化训练    | 🔥                                                                                             |
| [PyTorch中基于CUDA IPC的进程间Tensor共享简介](https://zhuanlan.zhihu.com/p/2019510762004050171)                                  | 训练框架    | 🔥                                                                                             |

## 深度学习&大模型知识

| 📚  文章                                                                                                             | 📖 知识分类     | 📜 备注                                                     |
|:-------------------------------------------------------------------------------------------------------------------|:------------|:----------------------------------------------------------|
| [彻底搞懂RoPE计算原理：从1D到3D](https://zhuanlan.zhihu.com/p/2023493768003724514)                                            | Attention   | [代码](./models/modules/rope_principle.ipynb)               |
| [DeepSeekV4中RoPE设计解析](https://zhuanlan.zhihu.com/p/2029134107490132079)                                              | Attention   | 🔥🔥                                                      |
| [超细图解MLA计算流&吸收矩阵对比分析](https://zhuanlan.zhihu.com/p/1948769945132470860)                                            | Attention   | [高清图](./deepseek_v3)                                      |
| [超细图解DSA计算流&性能对比与优化分析](https://zhuanlan.zhihu.com/p/1963371483985319543)                                           | Attention   | [高清图](./deepseek_v3)                                      |
| [用注意力知识分析DSA(DeepSeek Sparse Attention)的设计逻辑](https://zhuanlan.zhihu.com/p/1962162900111172920)                    | Attention   | 🔥🔥                                                      |
| [线性注意力(LinearAttention)的原理与细节(AlphaDeltaGate)解析](https://zhuanlan.zhihu.com/p/1969419528065773811)                 | Linear      | 🔥                                                        |
| [Qwen3 VL多模态解析](https://zhuanlan.zhihu.com/p/2023058271653602626)                                                       | 大模型      | 🔥                                                        |
| [VLM视觉-语言融合流程解析（Kimi K2.5/VL）](https://zhuanlan.zhihu.com/p/2018404307385500510)                                    | 大模型      | 🔥                                                        |
| [DeepSeek V4 哪些亮点值得关注？](https://www.zhihu.com/question/2030963929510310856/answer/2031734018199270833)              | 大模型      | 🔥🔥                                                      |
| [入门基础：分布式训练/推理基础：集合通信原理与实践](https://zhuanlan.zhihu.com/p/2006011081177457311)                                      | 分布式基础       | [练习](deeplearning_framework/collective_operations.ipynb)  |
| [入门基础：手写最基础的训练过程](https://zhuanlan.zhihu.com/p/687327516)                                                          | 深度学习        | 🔥                                                        |
| [入门基础：梯度近似运算与雅可比(Jacobian)矩阵](https://zhuanlan.zhihu.com/p/687815257)                                              | 深度学习        | -                                                         |
| [入门基础：Transformer基础模型代码实现--极简版(One-Page)](https://zhuanlan.zhihu.com/p/691126108)                                  | Transformer | [link](https://github.com/CalvinXKY/transformer_one_page) |
| [Query和Key在注意力机制中长得几乎一模一样，为什么还要分开?](https://www.zhihu.com/question/1934742507746464833/answer/1961698275406096016) | Transformer | 🔥                                                        |
| [为什么transformer的FFN需要先升维再降维？](https://www.zhihu.com/question/665731716/answer/1965427268001183164)                 | Transformer | 🔥🔥                                                      |
| [为什么线性注意力中K头数小于V头数？](https://www.zhihu.com/question/1978396956591141184/answer/1978404558473549228)                | Linear      | 🔥                                                        |
| [AI模型优化的必修课：参数搜索/自动调优](https://zhuanlan.zhihu.com/p/1991878121566279093)                                           | 深度学习        | 🔥                                                        |

## 主流大模型框架介绍

| 模型卡片                                      | 架构关键词                              | 介绍                                        | 
|:------------------------------------------|:-----------------------------------|:------------------------------------------|
| [DeepSeek V3](./models/deepseek_v3)       | MLA+MoE                            | [link](./models/deepseek_v3/README.md)    | 
| [Kimi K2](./models/kimi_k_2)              | MLA+MoE                            | [link](./models/kimi_k_2/README.md)       | 
| [DeepSeek V3.2](./models/deepseek_v3_2)   | MLA+DSA                            | [link](./models/deepseek_v3_2/README.md)  | 
| [Kimi K2.5](./models/kimi_k_2_5)          | MLA+MoE+MoonViT                    | [link](./models/kimi_k_2_5/README.md)     | 
| [GLM 5](./models/glm_5)                   | MLA(DSA)+MoE                       | [link](./models/glm_5/README.md)          | 
| [MiniMax M2.5](./models/minimax_m_2_5)    | GQA+MoE                            | [link](./models/minimax_m_2_5/README.md)  |
| [Qwen3-VL](./models/qwen3_vl)             | Dense+MoE+DeepStack+Interleaved-MRoPE | [link](./models/qwen3_vl/README.md)        |
| [Qwen3.5](./models/qwen3_5)               | Gated DeltaNet+Gated Attention+MoE | [link](./models/qwen3_5/README.md)        | 
| [Step 3.5 Flash](./models/step_3_5_flash) | GQA+SWA+MoE+MTP                    | [link](./models/step_3_5_flash/README.md) | 

## 🛠️辅助工具

| 📚 文章                                                                             | 📖 知识分类 | 🌐 链接                                                                                 |
|:----------------------------------------------------------------------------------|:--------|:--------------------------------------------------------------------------------------|
| [LLM大模型显存计算公式与优化](https://zhuanlan.zhihu.com/p/687226668)                         | LLM     | 🔥🔥🔥                                                                                |
| [LLM预训练模型MFU计算器](https://zhuanlan.zhihu.com/p/20401860293)                        | LLM     | [link](https://calvinxky.github.io/mfu_calculation/)                                  |
| [DeepSeekV3 MFU计算工具与算式](https://zhuanlan.zhihu.com/p/26107304514)                 | LLM     | [link](https://calvinxky.github.io/mfu_calculation/deepseek3mfu.html)                 |
| [PyTorch显存可视化与Snapshot数据分析](https://zhuanlan.zhihu.com/p/677203832)               | PyTorch | [link](https://github.com/CalvinXKY/BasicCUDA/tree/master/pytorch/torch_mem_snapshot) |
| [PyTorch结构可视化：交互式DeepSeekV3计算图](https://zhuanlan.zhihu.com/p/1977414887736112704) | PyTorch | [link](./pytorch_vista)                                                               |

## GPU基础知识

### [**BasicCUDA:**](https://github.com/CalvinXKY/BasicCUDA)

[https://github.com/CalvinXKY/BasicCUDA](https://github.com/CalvinXKY/BasicCUDA)

### 🎉🎉🎉：**20+知识分享，涵盖CUDA、NCCL、PyTorch、GPU硬件知识**

**[作者kaiyuan知乎主页🥳](https://www.zhihu.com/people/xky7)** https://www.zhihu.com/people/xky7

### **zhilink:**

<p align="center">
  <img src="kaiyuan_qr_code.png" alt="公众号二维码"  width="30%" />
</p>

### 学习更多AI Infra知识，推荐关注公众号: **InfraTech**

<p align="center">
  <img src="infra_tech_qr_code.jpg" alt="公众号二维码" />
</p>
