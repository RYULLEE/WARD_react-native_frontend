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

> src\navigations
> > AuthStack.js : 로그인 screen 스택  
> > Category.js : 카테고리 screen 스택  
> > EtcStack.js : 더보기 screen 스택  
> > MainStack.js : 메인 screen 스택  
> > NoticeStack.js : 공지사항 screen 스택  
> > QuestionStack.js : 질문사항 screen 스택  

> src\screens  
> > Stack_Name : Sreens,stacks,or utils which consist this Stack_Name  

> > AuthStack : Login, Signup  
> > Category.js : Category, Tier_system, Category_Timing, Category_Portfolio, Category_Etc, Algorithm, Portfolio, Timer, Similar, Thema, Effect
> > EtcStack.js : Etc, AuthStack, NoticeStack, QuestionStack, User_adminStack, service_intro, recruit_info, Personal_info
> > MainStack.js : Home, Ranking, Algorithm, Search, Home_2, Home_3, Home_4
> > NoticeStack.js : Notice, Notice_component_1
> > QuestionStack.js : Question, Question_component_1

> src\components // 주요화면 및 contents
> <br>
> > TabBarComponent.js : Bottom-Tab navigation component 삽입
> > <br/>
> > <img src="https://user-images.githubusercontent.com/80392577/148074237-766a51cc-43b9-42ad-ba7a-acca85d08c03.png" width="200" height="418"/>
> > <img src="https://user-images.githubusercontent.com/80392577/148074311-f78d74a9-b2a4-495d-932c-649890b114f6.png" width="200" height="418"/>
> > <img src="https://user-images.githubusercontent.com/80392577/148074419-514cec6a-29c4-43d3-b3aa-d2fa668f5ec3.png" width="200" height="418"/>
> > <img src="https://user-images.githubusercontent.com/80392577/148074487-26166c86-17da-41b6-8bfa-9d1c683b8ae6.png" width="200" height="418"/>

> > Line_chart_similar.js : 두개의 차트 동시에 꺾은선으로 표시, 유사도 값 표시 ( 모든 차트 data input : firebase storage )  
> > Score_Bar.js : 점수 표시해주는 ui 제작  
> > <br/>
> > <img src="https://user-images.githubusercontent.com/80392577/148071983-caf277dc-8d86-4552-af0f-dd0766bb086c.png" width="200" height="418"/>
> > <img src="https://user-images.githubusercontent.com/80392577/148084875-72378ca1-4feb-4bdb-ad7d-9c8d77e81bd5.png" width="200" height="418"/>



> > Search_Bar_similar.js : 유사도 분석시 두개의 종목 검색, 선택  
> > <br/>
> > <img src="https://user-images.githubusercontent.com/80392577/148071190-3ede3f34-730d-4e57-94a8-a5d4014e961b.png" width="200" height="418"/>
> > <img src="https://user-images.githubusercontent.com/80392577/148072644-b1cdd7c9-f77f-49ae-a1df-c029f66f94f8.png" width="200" height="418"/>

> > Effect.js : 영향 요인 진단, 클릭 항목별 line chart 와 area chart 동시 불러옴  
> > <br/>
> > <img src="https://user-images.githubusercontent.com/80392577/148085203-a501fd17-c7ef-4a40-8a4b-f7b7e0ca7086.png" width="200" height="418"/>
> > <img src="https://user-images.githubusercontent.com/80392577/148085482-c5223e38-05be-4e21-9f8f-3e7cd8c25f31.png" width="200" height="418"/>

> > Search_Bar.js : 메인 검색버튼 구현, 알고리즘 전체 검색 가능    
> > <br/>
> > <img src="https://user-images.githubusercontent.com/80392577/148075300-49fe53db-e911-4a49-84e5-ff6803a6bd7b.png" width="200" height="418"/>   
  
> > RadarChartScreen.js : 각 알고리즘별 세가지 점수 방사형 차트, ScrollTabbar 사용 
> > <br/>
> > <img src="https://user-images.githubusercontent.com/80392577/148071769-f3f81436-03a0-471b-ba24-b790fb027bcf.png" width="200" height="418"/>
> > <img src="https://user-images.githubusercontent.com/80392577/148075180-d28ca31e-1810-475d-9d66-a826410cc128.png" width="200" height="418"/>
> > <img src="https://user-images.githubusercontent.com/80392577/148083846-1355d345-ded1-4569-8ca4-687bffeecd0e.png" width="200" height="418"/>

> > Portfolio.js : 분산투자 유효성 검증, 레이더 차트 구현
> > <br/>
> > <img src="https://user-images.githubusercontent.com/80392577/148084562-a1a6f227-5f15-40b7-b79e-975ff5cbeca4.png" width="200" height="418"/>
> > <img src="https://user-images.githubusercontent.com/80392577/148084671-e780d09f-60c2-433a-bb2c-de7c4db77b36.png" width="200" height="418"/> 

> > Thema.js : 테마주별 드래그 후 이동, 재정렬 기능  
> > <br/>
> > <img src="https://user-images.githubusercontent.com/80392577/148073106-272af6fb-cfc8-4cae-b8f8-267812b756fd.png" width="200" height="418"/>

> > Upload_algorithm.js : 사용자가 파일 자유롭게 업로드 가능
> > <br/>
> > <img src="https://user-images.githubusercontent.com/80392577/148085665-023a42a5-2f73-47b0-a3c3-8793d31ef058.png" width="200" height="418"/>
> > <img src="https://user-images.githubusercontent.com/80392577/148085861-8f73c244-8016-4285-aa88-a7187cc9d663.png" width="200" height="418"/>






## BACKEND ( Google FireBase )



## APP File

