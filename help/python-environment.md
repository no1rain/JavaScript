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

If yu don't want to install **pyenv** via Homebrew, you can install it directly form the **GitHub** repository. Enter the following command into your command line to clone the **pyenv** GitHub repositoty into your home directory.

```BASH
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
```

After cloning it you need to enter the following command to add **pyenv** to your **$PATH** and start it when a new terminal window is opened(if you use a different shell then **zsh** you have to change ~/.zshre accordingly):
```BASH
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init --path)"' >> ~/.zshrc
```

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

---
## [[solved]](https://exerror.com/zsh-command-not-found-python/) [zsh: command not found: python](https://fjolt.com/article/python-command-not-found)

### How zsh: command not found: python Error Occurs?

I have installed Python on MacBook But As I type **python** in my terminal It is giving the following error.
```sh
python --version
zsh: command not found: python
```
so hrre I am writing all possible solutions that I have tried to resolve this error.

### How To Solve zsh: command not found: python Error?

**Solution 1: Set Python PATH**

1.First Of all, Just find Python Installation Path.<br>
2.Open the Terminal.<br>
3.In your text editor, open the ~/.bash_profile file. For example: atom ~/.bash_profile;<br>
4.To this file, add the following line at the bottom;<br>
5.export PYTHONPATH="/User/my_user/code"<br>
6.Save this text editor file.<br>
7.Close the termanal.<br>
8.Restart the terminal. You can now read the new settings.<br>
9.Type: echo $PYTHONPATH<br>
10.HOPE Now, Your error must be solved.<br>

**Solution 2: Run this Command**

First of all, Just Open Your terminal and Run This Command.
```sh
echo "alias python=/user/bin/python3" >> ~/.zshrc              <= download python3 install
echo "alias python=/opt/homebrew/bin/python3" >> ~/.zshrc      <= homebrew python3 install
```
Please note that you Must add the Python version at the end of this line<br>
**python=/usr/bin/python3** if you are using **python 3** then you need to Use **python3** now,<br>
your error should be fixed.

**Solution 3: Export profile**

First Of All Open Your terminal and Edit **bash_profile** with this command.
```sh
sudo nano ~/.bash_profile
```

It will ask You for Your Password Just Enter your password and paste the following lines
```sh
PYTHONPATH="<Your Python Path>"
export PYTHONPATH
```
Can't find Python Path? It should be here **(in most cases)**.

```sh
# For python
/usr/local/bin/python

# For python3
/Library/Frameworks/Python.framework/Versions/3.10/bin/python3
```
Then Press **control + x** to exit, and press **y** for saving. and Then Press ``**endter`` to return to the terminal window Then You have To Source it using the following command in a terminal, run
```sh
source ~/.bash_profile
```
Now, Your error must be solved.

---
## [Python 제거](https://www.delftstack.com/ko/howto/python/uninstall-python-on-mac-os/)[[Python 3.10]](https://stackoverflow.com/questions/72005302/completely-uninstall-python-3-10-on-mac)

**macOS의 명령줄을 사용하여 macOS 에서 Python 제거 [Deleting the frameworks]**

터미널에서 다음 명령을 실행한다.
```bash
sudo rm -rf /Library/Frameworks/Python.framework
```

Enter를 누른 명령을 실행하려면 시스템 암호를 입력해야 할 수 있다.

이제 macOS에서 Python3.10을 제거한다.
```sh
sudo rm -rf /Library/Frameworks/Python.framework/Versions/3.10
```

**Python을 제거하려면 심볼릭 링크를 제거 [Removing symbolic links]**

Python 프레임 워크를 참조하는 심볼릭 링크는 `/usr/local/bin`디렉토리에 저장된다.

**To list the broken symbolic links.**
```sh
ls -l /usr/local/bin | grep '..Current/Library/Of/Frameworks/Python.framework'
ls -l /usr/local/bin | grep '../Library/Frameworks/Python.framework/Versions/3.10
```

위의 명령에서 경로는 ` `사이에 언급되어 있습니다. 이 명령은 Python Framework에 대한 모든 링크를 반환한다.

이러한 링크를 수동으로 제거하려면 다음 명령을 실행한다.

**And to remove these links:**
```sh
cd /usr/local/bin
ls -l /usr/local/bin | grep '..Current/Library/Of/Frameworks/Python.framework' | awk '{print $9}' | tr -d @ | xargs rm
ls -l /usr/local/bin | grep '../Library/Frameworks/Python.framework/Versions/3.10' | awk '{print $9}' | tr -d @ | xargs rm*
```