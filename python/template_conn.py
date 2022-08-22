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