
출처 : https://dinfree.com/lecture/frontend/122_css_1.html

## 기본문법
CSS는 선택자와 선언부로 구성된다.
선택자는 스타일을 지정할 HTML요소(태그,아이디 등)를 가리킨다.
선언부에는 CSS 속성 이름과 값이 포함된다. 속성이 여러 개일 경우, 한 줄로 나열해도 상관없지만 여러 줄에 걸쳐 작성하는 것이 좋다.

```css
선택자 {속성:값; 속성:값...}

예)
/* h1태그의 색상을 빨간색으로 크기는 15px로 지정한다. */
h1 {color:red; font-size:15px;}
 ```

- CSS 구문은 선택자(selector)와 선언부(declaration)로 구성.
- 선택자는 디자인을 적용하고자 하는 HTML요소. -> 선택자 정의가 중요
- 선언부는 콜론(:)으로 구분 되어진 다수의 항목을 포함.
- 각 선언은 항상 세미콜론(;)으로 끝나며, 선언블록은 중괄호({})로 묶음.
- /* comment */은 코드를 설명하는 데 사용됨.

선택자의 중요성
CSS의 핵심은 적절한 선택자를 사용하는 것이며 복잡한 문서 구조에서 특정 부분을 선택하기 위해 선택자 지정은 어려울 수 있으며 html구조를 처음부터 잘 설계하는 것이 중요함.

![CSS 적용 방법](https://dinfree.com/assets/img/css2.jpg "CSS 적용 방법")

HTML 문서에 CSS를 적용하는 방법에는 내부 스타일시트, 외부 스타일시트, 인라인 스타일 등 총 3가지 방법이 있다.

### 1)내부 스타일시트
html 파일에 스타일을 기술하는 방법으로 <head></head> 태그 사이에 <style></style> 태그 부분에 작성한다.
html 과 css 가 한 파일에 있으므로 작업이 쉽고 간편하지만 css의 재활용이 안되는 문제가 있어 특별한 경우가 아니면 외부 스타일시트가 권장 된다.

```css
<head>
<style>
body {
    background-color: red;
}

h1 {
    color: maroon;
    margin-left: 40px;
}
</style>
</head>
<body>
    ...
</body>
```

### 2) 외부 스타일시트
css 를 작성하는 가장 기본적인 방법이다. 별도의 파일에 CSS 문서를 작성하고 해당 CSS를 필요로 하는 html문서에서 불러와 사용하는 형식이다.
이때 css는 동일한 서버에 있어도 되고 url을 통해 다른 서버의 css를 불러오는 것도 가능하다.

```css
<link rel="stylesheet" type="text/css" href="mystyle.css">
<link rel="stylesheet" type="text/css" href="http://cdn.site.com/css/mystyle.css">
```

### 3) 인라인 스타일
html 태그에 필요한 디자인 속성을 직접 작성 하는 형식이다. 그때 그때 필요한 디자인을 바로 적용할 수 있다는 편리함이 있지만
일관된 디자인 체계를 유지하는 데에는 방해가 되기 때문에 꼭 필요한 경우가 아니라면 사용하지 않도록한다.

```css
<h1 style="color:blue; margin-left:30px;">This is a heading</h1>
```

## 캐스케이딩과 우선순위
### 1) 캐스케이딩 의미
css 에서 Cascading 은 사전적 의미로 폭포처럼 떨어져 내리는 과 같은 의미를 가지고 있다.
css 에서는 디자인 속성이 html 문서의 구조 즉 DOM(Document Object Model) Tree 구조에서 상위 요소에서 정의된
디자인 속성이 하위 요소로 전달되는(상속 개념)의미에서 유래 되었다고 할 수 있다.

- 상위 태그에서 정의된 디자인 속송은 하위 태그로 상속
- 하위 태그에서 상위 태그에 정의된 디자인 속성을 변경할 수 있음.

```css
<!-- body 태그 안에 있는 모든 태그 요소들은 빨간색 글자로 표시됨 -->
<body style="font-color:red">
    <h1>Hello</h1>
</body>
```

### 2) 우선 순위
동일한 디자인 속성이 외부 스타일시트, 내부 스타일시트, 인라인 스타일시트에 적용 되어 있는 경우 우선순위는 가장 나중에 정의되는 스타일에 있다.
따라서 인라인 스타일시트가 가장 높은 우선순위로 적용되고 외부 스타일시트와 내부 스타일시트는 문서상 정의된 순서에 따라 우선순위가 결정되는 형식이다.

웹 브라우저 자체도 html 구성요소에 대한 내부적인 css를 가지고 있다고 볼 수 있다. 브라우저에 따라 사용자 정의 css를 사용할 수 있는것도 그 때문이다.
일반적인 수선순위(낮은순 -> 높은순)는 다음과 같다.
브라우저 디자인 정의 -> 외부 스타일시트 -> 내부 스타일시트 -> 인라인 스타일시트
