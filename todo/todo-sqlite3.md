# SQLite 설치

## [SQLite Download Page](https://www.sqlite.org/download.html)

### Precompiled Binaries for Windows
- sqlite-tools-win32-x86-3390200.zip 다운로드 후 압축해제
- sqlite3.exe 파일 위치 경로를 환경변경 path에 추가
  
  `ex) D:\sqlite3`

### db connection

```py
# sqlite3 모듈 가져 오기
import sqlite3
from sqlite3 import Error

#이 함수는 데이터베이스 파일에 대한 데이터베이스 연결을 만듭니다.
# 매개 변수:  데이터베이스 파일 이름
# 보고: 데이터베이스에 연결
def create_connection(db_file):
    """ create a database connection to a SQLite database """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        print(sqlite3.version)
        return conn
    except Error as e:
        print(e)
    return conn

# 데이터베이스와 연결하기위한 참조 핸들러 얻기
dbConnection = create_connection("./db/test.db")

cursorObj = dbConnection.cursor()
cursorObj.execute("SELECT * FROM user")
rowList = cursorObj.fetchall()
for row in rowList:
    print(row)

dbConnection.close()
```