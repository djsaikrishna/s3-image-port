# 从 v1 版本升级

v2 版本相对于 v1 主要是底层架构上的变化和一些 QoL 的改进，不涉及太多用户层面的破坏性变更，作为用户只需要将 v1 的配置导入 v2 即可继续使用。

## 配置迁移

1. 前往 [v1 版本](https://iport.yfi.moe) 的「设置 -> 配置」页面，点击想要迁移的配置的「复制」按钮（还没有保存过配置的话需要先保存一个）。
2. 前往 [v2 版本](https://imageport.app/zh) 的「设置 -> 配置」页面，点击卡片右上角的导入下拉菜单，选择「从 v1 版本导入」。
3. 如果 v1 版本的配置是符合要求的（该填的字段都非空）的，应该可以直接导入；如果导入失败，请检查
   1. v1 配置是否是正确的
   2. 导入时剪贴板中内容是否是 v1 配置
4. 如果导入成功，请检查 v2 版本中是否正确显示了 v1 配置中的内容。

### 哪些配置会被迁移？

会被迁移的配置包括：

- 所有 S3 储存桶相关的设置
- 路径模板（KeyTemplate）
- 是否自动刷新图库

不会被迁移的配置包括：

- 上传前压缩会被默认关闭，如果需要，可以手动打开
- 其他设置

不会被迁移的配置在导入 v1 配置后会保持默认值。

## 废弃的设置

路径模板（KeyTemplate）中的 `{{random}}` 模板被重命名为 `{{ulid-dayslice}}` 以更好的反映它的本质。`{{random}}` 目前仍可使用（行为和之前一致），但会在输入时给出警告。

## 关于自建

由于 `S3 Image Port` 实际上是一个没有后端的静态网站（不存储图片，用户访问图片的流量也不会经过 Image Port），自建几乎完全没有意义，因此为了减少维护成本，v2 不再提供官方维护的 Docker 镜像。

如果确实想要自建，请 clone 本项目后在 `apps/web` 目录中执行构建命令 `pnpm run build`，然后静态部署 `out` 目录中的内容即可。
