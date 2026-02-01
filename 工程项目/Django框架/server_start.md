启动命令

```sh
sudo /etc/init.d/nginx start  # 第5讲
sudo redis-server /etc/redis/redis.conf  # 第7讲
uwsgi --ini ~/app/scripts/uwsgi.ini  # 第5讲
daphne -b 0.0.0.0 -p 5015 app.asgi:application  # 第七讲
~/app/match_system/src/main.py  # 第九讲
```

```sh
cd ~/app/
python3 manage.py shell  # 打开django-shell
```

```py
# 清空 redis
from django.core.cache import cache
def clear():
    for key in cache.keys('*'):
        cache.delete(key) 
```

