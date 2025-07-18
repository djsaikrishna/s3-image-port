# What is S3 Image Port?

S3 Image Port is a dashboard for managing images in AWS S3 buckets, or S3 compatible services such as Cloudflare R2, DigitalOcean Spaces, Tencent COS, AliCloud OSS and more.

:::tip
Unlike traditional image hosting services, S3 Image Port is neither responsible for storing images nor providing image access services—it only manages images.

When we developed this project, we hoped to provide an image hosting solution **without vendor lock-in**: Your images are stored in an S3 bucket that is **unrelated** to our project. Even if `S3 Image Port` stops being maintained (which won't happen in the short term) or you no longer want to use `S3 Image Port`, you don't need to perform any migration.
:::

Traditionally, these storage services don't have dedicated image management panels. This solution provides a simple yet powerful interface for uploading, managing, and integrating images.

The panel itself doesn't store any data; all data is stored in your S3 bucket. Therefore, you can migrate or delete this panel at any time without losing any data.

## Features and Functionality

- :cloud: **Upload Images**: Easily upload your images with support for compression and format conversion before upload.
- :framed_picture: **Gallery**: Browse and find all your uploaded images in the gallery with rich filtering options.
- :link: **Copy Image Links**: One-click copying of raw links or Markdown format links to images.
- :wastebasket: **Delete Images**: Quickly delete your uploaded images from the management panel.

## S3 Image Port is not an Image Hosting Service

`S3 Image Port` is not a traditional image hosting service.

Generally speaking, image hosting services usually refer to services that provide image upload, storage, and access transmission, while `S3 Image Port` doesn't store images nor interfere with the image access process. This has several advantages:

- Images are stored in your own S3 bucket, and access doesn't go through this project, which means that even if this project suddenly disappears, your image access won't be interrupted (and there will be no data loss).
- Traditional image hosting services usually have a database storing various metadata in addition to storing the images themselves. If data is lost and only image backups remain, it's difficult to fully restore to the previous state (for example, the correspondence between URLs and file paths may depend on this database).
- **Completely customizable access paths**: Since `S3 Image Port` doesn't particularly care about how images are accessed, you can have complete control over image URLs (for example, using the method described in [Extending Public URL Functionality with WebP Cloud Services](/guide/use-webp-cloud-services)).

For more about the initial motivation for developing `S3 Image Port` and the reasoning behind these design choices, I wrote about it in a blog post [Using S3 (R2 / OSS / COS ...) as Image Hosting: An Image Management Solution](https://yfi.moe/post/manage-website-images#%E4%B8%BA%E4%BB%80%E4%B9%88%E7%94%A8-s3-r2) (in Chinese), which you might find interesting.

## Usage

Since `S3 Image Port` itself doesn't store images, isn't responsible for transmitting images, and has no backend at all, you can directly use the [public instance `imageport.app`](https://imageport.app), which is also our recommended way to use it.
Just open the link, enter your S3 bucket information, and you can start using it.

For more information, please refer to [Getting Started](/guide/getting-started).
