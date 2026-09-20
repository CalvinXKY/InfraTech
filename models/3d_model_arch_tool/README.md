# 3D Model Architecture Tool

交互式 3D 架构对照工具：左右各选一个模型，并排查看模块、连线和重复层结构。

在线预览：

**https://calvinxky.github.io/InfraTech/3d_models**

## 启动方式

本工具是静态站点（HTML + ES Module + Three.js），**不要用 `file://` 直接打开**，浏览器会拦截模块加载。

### 在线

https://calvinxky.github.io/InfraTech/3d_models

### 本地

在本目录启动任意静态服务器，例如：

```powershell
python -m http.server 8010 --directory "models/3d_model_arch_tool"
```

工作目录是仓库根时，把路径换成 `d:\RL\InfraTech\models\3d_model_arch_tool`（或你的克隆路径）。然后打开：

http://127.0.0.1:8010/

也可用：

```powershell
npx --yes serve models/3d_model_arch_tool
```

## 按键与操作

界面文案为英文；下面按屏幕位置说明。

### 顶部

| 控件 | 作用 |
|:--|:--|
| **InfraTech** | 打开本仓库 `models` 目录（GitHub）。 |
| **Dark / Light** | 深色 / 浅色主题。默认 Light，选择会记在浏览器本地。 |
| **Overview** | 相机回到整图俯视，取消当前模块特写。 |
| **Sources**（书本图标） | 弹出当前左右两个模型的配置来源、tech report 链接和构图说明。 |
| **Story mode** | 约一分钟的对照导览：相机会按章节对准模块，并配英文解说。任意一对模型都可播放；Original Transformer × DeepSeek V4.1 Flash 使用单独撰写的剧本，其余为按角色生成的通用导览。 |

### 底部

| 控件 | 作用 |
|:--|:--|
| **播放 / 暂停** | 控制 token 沿连线流动的示意动画（不是真实推理时间线）。 |
| **Speed** | 动画倍速：`0.4×` / `1×` / `2×`。 |
| **左侧下拉** | 选择左视口模型。 |
| **右侧下拉** | 选择右视口模型。 |
| **年份 / 模型名按钮** | 窄屏时切换当前聚焦的视口（左或右）。 |

### 3D 视口

| 操作 | 作用 |
|:--|:--|
| 拖动 | 旋转（OrbitControls），左右视口相机会同步。 |
| 滚轮 / 触控板缩放 | 靠近模块时外壳会淡出、内部示意展开。 |
| 点击模块 | 相机飞到该组件；对侧尽量对齐同类模块。 |
| 左上角模块名芯片 | 退出特写，回到 Overview。 |

### Story 面板（开启 Story 后）

| 控件 | 作用 |
|:--|:--|
| **上一章 / 下一章** | 跳转章节。 |
| **播放 / 暂停** | 控制导览进度。 |
| **Exit** | 退出 Story，回到自由浏览。 |
| **底部圆点** | 直接跳到某一章。 |

## 支持的模型

下拉菜单中的条目均有公开 config / tech report，足以按层结构构图。资料不足的（例如 Step 5）没有画进去。

| 菜单名 | 构图依据（摘要） | 年份 |
|:--|:--|:--|
| Original Transformer | Vaswani et al. 2017，6+6 层 seq2seq（Blender GLB） | 2017 |
| DeepSeek V4.1 | V4.1 Flash 报告 + 官方 config（Blender GLB） | 2026 |
| DeepSeek V4 | V4-Pro：61 层，HCA 128× + CSA 4× + SWA 128，Hash-MoE 前 3 层 | 2026 |
| Qwen3.8 | Qwen3.8-Flash-Next：48 层，3×GDN + 1×QSA，10+1 / 512 | 2026 |
| Kimi K3 | 93 层，69 KDA + 24 Gated MLA，16+2 / 896 | 2026 |
| GLM-5 | 78 层，前 3 层 dense，MLA + DSA，8+1 / 256 | 2026 |
| Gemma 4 | Gemma 4 **31B dense**：60 层，10×(5 SWA + 1 Global) | 2026 |
| MiniMax M2.5 | 62 层全 GQA + MoE，8 / 256，无 shared expert | 2026 |
| Step 3.5 | Step 3.5 Flash：45 层，1 Full + 11×(3 SWA + 1 Full) | 2026 |

重复层用外框 `×N` 表示**同样结构、不同权重**，不是权值共享。

## 参考源

### 各模型架构数据

每个模型的层数、专家数、注意力类型等来自对应 Hugging Face `config.json`、模型卡和/或技术报告。在工具里点 **Sources** 可看到当前一对模型的链接。常用入口：

- [Attention Is All You Need](https://arxiv.org/html/1706.03762v7)
- [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
- [DeepSeek-V4-Pro config](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/blob/main/config.json) · [报告](https://arxiv.org/html/2606.19348)
- [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) · [报告](https://arxiv.org/html/2608.30320)
- [Kimi K3](https://huggingface.co/moonshotai/Kimi-K3) · [报告](https://arxiv.org/html/2607.24653v1)
- [GLM-5](https://huggingface.co/zai-org/GLM-5) · [报告](https://arxiv.org/html/2602.15763v2)
- [Gemma 4 31B](https://huggingface.co/google/gemma-4-31B-it) · [报告](https://arxiv.org/html/2607.02770)
- [MiniMax-M2.5](https://huggingface.co/MiniMaxAI/MiniMax-M2.5)
- [Step-3.5-Flash](https://huggingface.co/stepfun-ai/Step-3.5-Flash) · [报告](https://arxiv.org/html/2602.10604)

文字卡片与二维架构图仍在本仓库 [`models/`](../README.md) 各模型子目录中。

### 渲染与交互 相关

本工具的 3D 外壳、视口交互和内部示意，改编自 Peter Gostev 的开源项目，相关参考代码遵循MIT协议
