# Settings Reference

Currently, `S3 Image Port` settings include three parts:

1. S3 Bucket Settings
2. Gallery Settings
3. Upload Settings

## S3 Bucket Settings { #s3-settings }

Endpoint, bucket name, region, Access Key, and Secret Key are all provided when creating an S3 bucket, so we won't elaborate on them here.

### Use Path Style API { #use-path-style-api }

For the vast majority of S3 providers, this option should be kept disabled. This is a fallback prepared for some particularly old S3 providers.

For more information about path name and virtual hosted-style, refer to the [AWS S3 documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html).

### Public URL { #public-url }

Images in the bucket need to be directly accessible through a link.

For example, if an image's path in the bucket is `i/2024/05/29/name.jpg`, and you can directly access it (without authentication) through the link `https://i.yfi.moe/i/2024/05/29/name.jpg`, then `https://i.yfi.moe/` is the Public URL you need to fill in.

If you directly use the "public bucket" feature of some S3-compatible services, the same principle applies. For example, for Cloudflare R2, it should look like `https://pub-<bunch-of-characters>.r2.dev`. For Tencent Cloud COS, it should look like `https://<BucketName-APPID>.cos.<Region>.myqcloud.com`

## Upload Settings { #upload-settings }

### Key Template { #key-template }

The naming template when uploading to S3. Placeholders wrapped in <code v-pre>{{}}</code> will be replaced.

The following placeholders are supported:

- <code v-pre>{{year}}</code>: Year. e.g., `2024`
- <code v-pre>{{month}}</code>: Month (two digits). e.g., `05`
- <code v-pre>{{day}}</code>: Day (two digits). e.g., `29`
- <code v-pre>{{timestamp}}</code>: Unix timestamp. e.g., `1732847234567` (milliseconds)
- <code v-pre>{{filename}}</code>: Filename (without extension). e.g., `image`
- <code v-pre>{{ext}}</code>: File extension. e.g., `jpg`
- <code v-pre>{{ulid}}</code>: Unique identifier (ULID). e.g., `01BX5ZZKBKACTAV9WEVGEMMVR0`
- <code v-pre>{{ulid-dayslice}}</code>: ULID day slice (recommended for use with year, month, day). e.g., `5zzkbk-mmvr`
- <code v-pre>{{random}}</code>: Random string (deprecated, use `ulid-dayslice` instead)

Default template: <code v-pre>i/{{year}}/{{month}}/{{day}}/{{ulid-dayslice}}.{{ext}}</code>

Example result: <code v-pre>i/2024/05/29/5zzkbk-mmvr.jpg</code>

### Image Compression and Conversion

Images will be processed according to the given parameters during upload.

## Gallery Settings { #gallery-settings }

### Auto Refresh { #auto-refresh }

Automatically refresh every time the gallery is loaded. If enabled, the gallery cache will sync better with the S3 bucket, but there will be more `ListObjects` requests, which may slightly increase S3 costs.
