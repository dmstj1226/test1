function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10) ;
}

function draw() {
  background(0,0,50);
  randomSeed(0) ;
  noFill() ;
  stroke(255,215,0) ;
  strokeWeight(4);
  
  rect(0,0, windowWidth, windowHeight) ;
  rect(0,0, 20, 20) ;
  rect(20,0, 20, 20) ;
  rect(40,0,20,20) ;
  rect(0,20,20,20) ;
  rect(20,20,20,20) ;
  rect(0,40,20,20) ;
  // 왼쪽 위 모퉁이
  
  rect(0,windowHeight - 20, 20,20) ;
  rect(20, windowHeight - 20,20,20) ;
  rect(40,windowHeight - 20, 20, 20) ;
  rect(0,windowHeight - 40,20,20) ;
  rect(20, windowHeight - 40, 20,20) ;
  rect(0, windowHeight - 60, 20, 20) ;
  // 왼쪽 아래 모퉁이
  
  rect(windowWidth - 20,0,20,20) ;
  rect(windowWidth  - 40, 0, 20, 20) ;
  rect(windowWidth - 60, 0, 20, 20) ;
  rect(windowWidth - 20, 20, 20, 20) ;
  rect(windowWidth - 40 , 20, 20, 20) ;
  rect(windowWidth - 20 , 40, 20, 20) ;
 // 오른쪽 위 모퉁이
  
  rect(windowWidth - 20 , windowHeight - 20 , 20 , 20) ;
  rect(windowWidth - 40, windowHeight - 20 , 20, 20) ;
  rect(windowWidth - 60 , windowHeight- 20 , 20 , 20 ) ;
  rect(windowWidth - 20 , windowHeight - 40 , 20, 20) ;
  rect(windowWidth - 40 , windowHeight - 40 , 20, 20) ;
  rect(windowWidth - 20 , windowHeight - 60 , 20, 20) ;
  // 오른쪽 아래 모퉁이

  
  // 무늬를 넣을 건데 ㄱ 이랑 ㄴ 을 반복해서 그릴 수 있도록... 하려면 필요한 변수는 엑스와 와이 시작점인데 와이는 한 줄 그리는 동안 고정 되어있고 엑스값은 일정한 값으로 늘어나고... 상호작용은 마우스와이 값이 좋을 듯
  
  var line_startX ;
  var line_startY ;
  var delta = map(mouseX, 0, windowWidth, 10, 100);
  
  for (line_startY = 100 ; line_startY < windowHeight / 2 ; line_startY += 20) {
    for( line_startX = 20 ; line_startX < windowWidth/2 ; line_startX += 10) {
      strokeWeight(2);
      stroke(255+mouseX,215+mouseX, mouseX/2) ;
      line(line_startX, line_startY, line_startX, line_startY + 10);
      var r = random(0,1) ;
      if (r > 0.5) {
        line(line_startX,line_startY, line_startX - delta, line_startY) ;
       } else {
         line(line_startX, line_startY+10, line_startX + delta, line_startY+10)
       }
    }
    
  }
   // 모음으로 만든 패턴 
  for (line_startY = windowHeight / 2 + 10 ; line_startY < windowHeight - 10 ; line_startY += 20) {
    for( line_startX = windowWidth/2 ; line_startX < windowWidth ; line_startX += 10) {
      strokeWeight(2);
      line(line_startX, line_startY, line_startX, line_startY + 10);
      var r = random(0,1) ;
      if (r > 0.5) {
        line(line_startX,line_startY+5, line_startX - delta, line_startY+5) ;
       } else {
         line(line_startX, line_startY+5, line_startX + delta, line_startY+5)
         
       }
    }
  }
  // 해와 달
  noStroke()
  fill(255,0,0)
  ellipse(windowWidth - 300, windowHeight/4, mouseX/3, mouseX/3)
  fill(255)
  ellipse(windowWidth/4, windowHeight - 300, mouseY/3, mouseY/3)
  
  

}
