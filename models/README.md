# 主流模型介绍

## 🔍内容总览

| 模型名称 | 架构关键词 | 常见参数规模（总/激活） | 上下文长度 | 发布时间 |
|:--|:--|:--|:--|:--|
| [DeepSeek V3](./deepseek_v3) | MLA+MoE | 671B/37B | 128K | 2024年12月 |
| [Kimi K2](./kimi_k_2) | MLA+MoE | 1T/32B | 128K | 2025年7月 |
| [DeepSeek V3.2](./deepseek_v3_2) | MLA+DSA | 685B级 | 128K | 2025年12月 |
| [DeepSeek V4](./deepseek_v4) | Hybrid Attention(CSA+HCA)+MoE+mHC | 1.6T/49B（Pro）；284B/13B（Flash） | 1M | 2026年4月 |
| [Kimi K2.5](./kimi_k_2_5) | MLA+MoE+MoonViT | 1T/32B | 256K | 2026年1月 |
| [Kimi K3](./kimi_k_3) | KDA+Gated MLA+AttnRes+Stable LatentMoE | 2.8T/104B | 1M | 2026年7月 |
| [GLM 5](./glm_5) | MLA(DSA)+MoE | 744B/40B | 200K | 2026年2月 |
| [MiniMax M2.5](./minimax_m_2_5) | GQA+MoE | 229B/10B | 200K | 2026年2月 |
| [Qwen3.5](./qwen3_5) | Gated DeltaNet+Gated Attention+MoE | 397B/17B（MoE版） | 262K | 2026年2月 |
| [Qwen3-VL](./qwen3_vl) | DeepStack+Interleaved-MRoPE | 32B；235B/22B | 256K | 2025年10月 |
| [Step 3.5 Flash](./step_3_5_flash) | GQA+SWA+MoE+MTP | 196B/11B | 256K | 2026年2月 |

## 🧊 3D 架构对照

交互式 3D 对照工具（左右各选一个模型）：见 [3d_model_arch_tool](./3d_model_arch_tool)。

- 本地启动与按键说明：[README](./3d_model_arch_tool/README.md)
- 在线：https://calvinxky.github.io/InfraTech/3d_models

## 🖼️架构图索引

- [DeepSeek V3模型卡片](./deepseek_v3)

<p style="text-align: center;">
  <img src="deepseek_v3/deepseek_v3_architecture.jpg" alt="DeepSeek V3架构图" />
</p>

- [Kimi K2模型卡片](./kimi_k_2)

<p style="text-align: center;">
  <img src="kimi_k_2/kimi_k_2_architecture.jpg" alt="Kimi K2架构图" />
</p>

- [DeepSeek V3.2模型卡片](./deepseek_v3_2)

<p style="text-align: center;">
  <img src="deepseek_v3_2/deepseek_v3_2_architecture.jpg" alt="DeepSeek V3.2架构图" />
</p>

- [DeepSeek V4模型卡片](./deepseek_v4)

<p style="text-align: center;">
  <img src="deepseek_v4/deepseek_v4_architecture.jpg" alt="DeepSeek V4架构图" />
</p>

- [Kimi K2.5模型卡片](./kimi_k_2_5)

<p style="text-align: center;">
  <img src="kimi_k_2_5/kimi_k_2_5_architecture.jpg" alt="Kimi K2.5架构图" />
</p>

- [Kimi K3模型卡片](./kimi_k_3)

<p style="text-align: center;">
  <img src="kimi_k_3/kimi_k_3_architecture.jpg" alt="Kimi K3架构图" />
</p>

- [GLM 5模型卡片](./glm_5)

<p style="text-align: center;">
  <img src="glm_5/glm_5_architecture.jpg" alt="GLM 5架构图" />
</p>

- [MiniMax M2.5模型卡片](./minimax_m_2_5)

<p style="text-align: center;">
  <img src="minimax_m_2_5/minimax_m_2_5_architecture.jpg" alt="MiniMax M2.5架构图" />
</p>

- [Qwen3.5模型卡片](./qwen3_5)

<p style="text-align: center;">
  <img src="qwen3_5/qwen_3_5_397b_a17b_architecture.jpg" alt="Qwen3.5 397B A17B架构图" />
</p>

<p style="text-align: center;">
  <img src="qwen3_5/qwen_3_5_27b_architecture.jpg" alt="Qwen3.5 27B架构图" />
</p>

- [Qwen3-VL模型卡片](./qwen3_vl)

<p style="text-align: center;">
  <img src="qwen3_vl/qwen_3_vl_32b_architecture.jpg" alt="Qwen3-VL 32B架构图" />
</p>

<p style="text-align: center;">
  <img src="qwen3_vl/qwen_3_vl_235b_a22b_architecture.jpg" alt="Qwen3-VL 235B A22B架构图" />
</p>

- [Step 3.5 Flash模型卡片](./step_3_5_flash)

<p style="text-align: center;">
  <img src="step_3_5_flash/step_3_5_flash_architecture.jpg" alt="Step 3.5 Flash架构图" />
</p>
