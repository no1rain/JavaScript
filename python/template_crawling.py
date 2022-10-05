from bs4 import BeautifulSoup
import urllib.request

url = 'https://s.search.naver.com/p/intentblock/search.naver?ac=0&aq=0&bid=SYS-0000000000549268&display=10&fgn_city=&fgn_region=&lgl_lat=36.3445545&lgl_long=127.4374448&lgl_rcode=07110116&ngn_country=KR&nlu_query=%7B%22v%22%3A%223%22%2C%22intentblock%22%3A%221%22%2C%22qid%22%3A%22%ED%8C%8C%EC%9D%B4%EC%8D%AC%22%2C%22abt%22%3A%5B%7B%22eid%22%3A%22SBR1%22%2C%22value%22%3A%7B%22bucket%22%3A%22C1%22%2C%22is_control%22%3Atrue%7D%7D%5D%7D&page_id=&query=%ED%8C%8C%EC%9D%B4%EC%8D%AC&ssc=tab.itb.all&start=1&where=nx_bridge'
html = urllib.request.urlopen(url).read()
soup = BeautifulSoup(html, 'html.parser')

title = soup.find_all(class_='title')

print(title)

for i in title:
    print(i.attrs['href'])