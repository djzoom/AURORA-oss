# Aurora · 从零手写音频 AI（免费第一课）

> 这是 [Aurora 完整课程](https://github.com/djzoom/AURORA) 的**开源前门**——
> 一门从零手写的音频 AI 课程:99 课、约 6 个月,从一条正弦波,到 Whisper 内部。
> FFT、STFT、MFCC、反向传播、注意力、CTC、RAG——**全部亲手写**,再与参考实现对齐(误差 < 1e-10)。

**不调 API,亲手造。目标不是做只会调 API 的集成商,而是成为真正懂原理的构筑者(builder)。**

## 🔰 免费第一课,5 分钟跑起来

零基础也能跑。终端里依次执行(Windows 装 Python 记得勾 "Add to PATH"):

```bash
python3 -m venv .venv                                   # 建独立环境
source .venv/bin/activate                               # Mac/Linux(Win: .venv\Scripts\Activate.ps1)
pip install numpy matplotlib jupyterlab ipykernel       # 第一课只需这几样
python -m ipykernel install --user --name aurora --display-name "Python (AURORA)"
jupyter lab                                              # 浏览器打开
```

打开 `notebooks/0_foundation/L01_motivation.ipynb`,**右上角内核切成 `Python (AURORA)`**,
按下第一个 `Shift+Enter`——**在你自己的电脑上,亲手跑出第一条正弦波 + FFT ✅。**

> 看到 `NotImplementedError`?那是课程故意留的 `✏️ TODO`,在等你动手,不是坏了。

## 🎮 顺便打一局:Aurora Quest(8-bit 课程 RPG)

学累了?课程还能"打"着学。**在线试玩 → <https://djzoom.github.io/AURORA-oss/aurora-quest/>**
(或下载单文件离线版 [`aurora-quest/dist/aurora-quest.html`](aurora-quest/dist/aurora-quest.html),双击即玩、零依赖。)
七个黑盒 Boss 把守从正弦波到 Whisper 的整条链路,
题目从 1000 题课程题库随机抽样;答对涨分,连击倍率封顶 x4,
打穿终章可以三字母署名,登上街机式英雄榜。想破纪录?先把 L01 学明白。

## 想继续?(L02–L99)

第一课通关后,继续造你亲手合成的第一声可听正弦波,一路到语音识别、音乐、大模型——
手写 FFT、反向传播、Transformer,六个月造出 4 个能演示的系统。
完整课程(全 99 课 + solutions + 引导视频 + 社群 + 更新)是付费产品——**详情见私域入口。**

## 关于本仓库

- 本仓库是完整课程(EE,L01–L99)**自动发布出的免费子集**(CE,第一课 + Aurora Quest),不接受 PR(它是生成的镜像)。
- **开放原则**(哪些免费/付费、为什么、路径、许可):见 [`OPENNESS.md`](OPENNESS.md)。
- 许可:[`LICENSE`](LICENSE) — CC-BY-NC(可学可改,不可商用/打包售卖)。
- 发布自私有仓 `@ d416eac`。

我们白板见。🎧
