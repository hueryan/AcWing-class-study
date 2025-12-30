**输出格式**

```py
a = int(input())
b = int(input())
c = int(input())
d = int(input())

print("DIFERENCA = %d" % (a * b - c * d))
print(f"DIFERENCA = {a * b - c * d}")
print("DIFERENCA = {}".format(a * b - c * d))
```

**三元运算符**

```py
a, b = map(int, input().split())

ans = "Sao Multiplos" if a % b == 0 or b % a == 0 else "Nao sao Multiplos"
print(ans)
```

**判断逻辑**

```py
a = input()
b = input()
c = input()
if a == "vertebrado":
    if b == "ave":
        if c == "carnivoro":
            print("aguia")
        elif c == "onivoro":
            print("pomba")
    elif b == "mamifero":
        if c == "onivoro":
            print("homem")
        elif c == "herbivoro":
            print("vaca")
elif a == "invertebrado":
    if b == "inseto":
        if c == "hematofago":
            print("pulga")
        elif c == "herbivoro":
            print("lagarta")
    elif b == "anelideo":
        if c == "hematofago":
            print("sanguessuga")
        elif c == "onivoro":
            print("minhoca")
---------------------------------------------------------------            
            
zoo = {
    "vertebrado":
        {"ave":
            {
                "carnivoro": "aguia",
                "onivoro": "pomba"

            },
        "mamifero":
            {
                "onivoro": "homem",
                "herbivoro": "vaca"
            }
        },
    "invertebrado":
        {
            "inseto":
                {
                    "hematofago": "pulga",
                    "herbivoro": "lagarta"

                },
            "anelideo": 
                {
                    "hematofago":"sanguessuga",
                    "onivoro": "minhoca"
                }
        }
}

ans = zoo
for _ in range(3):
    ans = ans[input()]
print(ans)

```

**输入格式**

```py
x, y = map(int, input().split())
zoo = {
	1 : 4,
	2 : 4.5,
	3 : 5,
	4 : 2,
	5 : 1.5
}
ans = zoo[x] * y
print(f"Total: R$ %.2f" %(ans))
```

**字符拆长度**

```py
strs = input()
print(len(strs))
```

**循环**

```py
while (user_input := input()) and (n := int(user_input)) > 0:
    for i in range(1, n + 1):
    	print(i, end=" ")
    print()
```

**质数**

```py
import math

n = int(input())
for _ in range(n):
	a = int(input())
	flag = 1
	for i in range(2, int(math.sqrt(a)) + 1):
		if a % i == 0:
			flag = 0
			break
	if flag == 0:
		print("{} is not prime".format(a))
	elif flag == 1:
		print("{} is prime".format(a))
```

**二维数组**右上三角

```py
def main():
    n, m = map(int, input().split())
    a = [[0]*m for _ in range(n)]
    dirs = [(0,1),(1,0),(0,-1),(-1,0)]  # 右、下、左、上
    d = 0
    x = y = 0
    for cur in range(1, n*m+1):
        a[x][y] = cur
        dx, dy = dirs[d]
        nx, ny = x + dx, y + dy
        if not (0 <= nx < n and 0 <= ny < m and a[nx][ny] == 0):
            d = (d + 1) % 4
            dx, dy = dirs[d]
            nx, ny = x + dx, y + dy
        x, y = nx, ny

    for row in a:
        print(' '.join(map(str, row)))

if __name__ == '__main__':
    main()
```

