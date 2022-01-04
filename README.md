# WARD APP 개발내용

## WARD 서비스 소개

<img src="https://user-images.githubusercontent.com/80392577/148022033-8cf96d19-1b5a-47d1-ad71-bd55cee46f47.png" width="400" height="300"/>

> 2020년 코로나 시대에 수많은 개인은 주식을 처음 시작하게 되었고, 21년부터 투자에 어려움을 느끼기 시작하여 저희는 그 이유를 분석하고 해결책을 제시하고자 합니다. 저희는 다음에 해당하는 3가지 해결책을 제시했습니다.  

> 1. 종목 Tier System ( 가까운 미래에 상승확률이 높은 종목"군" 을 추천하자
> 2. 기술적 분석 점수화 ( 기술적 분석 결과를 100점 만점 점수로 표현 )
> 3. 게임처럼 다양한 주식 분석툴 제공 ( 유사도 점수, 포트폴리오 진단, 테마주 새롭게 정의 )
> 
<img src="https://user-images.githubusercontent.com/80392577/148023123-562e069f-ef27-4ae1-aebc-1b29fa8bacb7.png" width="100%" height="220"/>



## FRONTEND ( React Native )

> src\components
> > Line_chart_similar.js : 두개의 차트 동시에 꺾은선으로 표시, 유사도 값 표시 ( data input : firebase storage )  
> > Score_Bar.js : 점수 표시해주는 ui 제작  
> > Search_Bar_similar.js : 유사도 분석시 두개의 종목 검색, 선택  
> > Search_Bar.js : 메인 검색버튼 구현, 알고리즘 전체 검색 가능   

> src\navigations
> > AuthStack.js : 로그인 screen 스택  
> > Category.js : 카테고리 screen 스택  
> > EtcStack.js : 더보기 screen 스택  
> > MainStack.js : 메인 screen 스택  
> > NoticeStack.js : 공지사항 screen 스택  
> > QuestionStack.js : 질문사항 screen 스택  




## BACKEND ( Google FireBase )



## APP File

