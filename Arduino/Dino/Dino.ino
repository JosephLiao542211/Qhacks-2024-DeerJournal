short lights = 1;
const int time_length = 5;
int time = 0;
short dt = 1;

#define LENGTH 20

void setup() {
    pinMode(9,OUTPUT);
    Serial.begin(115200);
}

void loop() {
    breathe(time+=dt);
    receiveData();
    if (time > time_length*50 || time < 0) {
        //reverse direction
        dt *= -1;
    }
}

void breathe(int i) {
    if (lights) {
        analogWrite(9,i*double(255)/time_length/50);
        delay(10);
    }
    else {
        analogWrite(9, 0);
    }
}

void receiveData() {
  if (Serial.available()) {
    char buffer[LENGTH];
    int index = 0;
    bool receiving = true;
    
    while (receiving) {
      if (Serial.available()) {
        char ch = Serial.read();
        if (ch == '\n' || ch == '\0') {
          buffer[index] = '\0';
          receiving = false;
        } else {
          buffer[index++] = ch;
          if (index == LENGTH) {
            buffer[index] = '\0';
            break;
          }
        }
      }
    }

    if (strcmp(buffer,"b") == 0) {
        lights^=1;
        time = 0;
    }
    Serial.println(buffer);
  }
}