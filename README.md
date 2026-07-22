i made this because toc doesn't exist in the mobile interface.

## Example Usage

[Uploading Screencast_20260722_112941.webm…]()

## Installation and Usgae

- command
    - `npx quartz plugin add github:HappyPotatoHead/drawer`
- Go to `quartz.config.yaml`

```yaml
plugins:
    - source: github:HappyPotatoHead/drawer
    enabled: true
    options:
        collapseByDefault: false
    layout:
        position: left
        priority: 50
        display: mobile-only
```

- updates:
    - `npx quartz plugin install --latest github:HappyPotatoHead/drawer`

> [!WARNING]
>
> do note that this is not a replacement, so you still need to enable the community toc plugin

```yaml
plugins:
    - source: github:quartz-community/table-of-contents
    enabled: true
    order: 50
    layout:
        position: right
        priority: 30
        display: desktop-only
```
