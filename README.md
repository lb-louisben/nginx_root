# nginx_root
存储一些nginx的项目目录

## nginx.conf
该文件是通过软链接, 将 /opt/homebrew/etc/nginx/nginx.conf 文件链接到该目录下

## server
```nginx configuration
    server {
        listen       8000;
        listen       127.0.0.1:8000;
        server_name  www.louisben.edu.com  alias  louisben.edu.com;

        location / {
            root   html;
            index  index.html index.htm;
        }
    }
```
