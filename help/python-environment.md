# MAC M1 Python 설치기

## Homebrew 설치
   
**버전 확인하는 법**

```sh
brew -v
Homebrew 3.5.7
```

**homebrew 3.5.7 이라고 표시되면 설치가 된 상태.**

[homebrew 공식페이지 https://brew.sh/index_ko](https://brew.sh/index_ko)


---
## pyenv 설치

MacOS에선 pyenv를 이용해 python을 설치한다.

pyenv가 설치되었는지 확인한다.

pyenv는 파이썬을 관리하기 위한 오픈소스이다.

**버전 확인하는 법**
```sh
pyenv -v
pyenv 2.3.3
```

설치되어있지 않다면 터미널에 아래에 있는 스크립트를 실행시켜준다.
```sh
brew install pyenv
```


---
## Python 설치
   
**버전 확인하는 법**
```bash
python --version
Python 2.7.18
```

**파이썬이 설치되어 있지 않다면, python 설치 가능한 버전 리스트를 확인할 수 있음**
```sh
pyenv install --list
```

스크립트를 실행해서 python 버전을 확인한 후 최신버전으로 설치해준다.(작성일 2022-08-18 기준 최신버전 3.10.6)
```sh
pyenv install 3.10.6
python --version
pyenv version
```
**Python 버전 변경(Python 2.7.18 -> 3.10.6)**
```sh
pyenv global 3.10.6
```

만약 global로 변경이 안된다면, local 로 시도해보자.

다시 한번 파이썬 버전을 확인하면 최신버전으로 바뀐 것을 확인 할 수 있다.
```sh
python --version
python
>>> $
```