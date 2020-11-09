<template>
  <v-container grid-list-lg-xl>
    <div class="card">
      <v-card elevation="2" outlined height="350">
        <div class="card1-root">
          <div class="head-card1">
            <div class="card1-left">
              <div>
                <p>สมาชิกผู้ใช้</p>
              </div>
              <div>
                <v-btn>วันนี้</v-btn>
              </div>
              <div><h3>ปฏิทิน</h3></div>
            </div>
            <div class="card1-right">
              <div class="right-icon">
                <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
              </div>
            </div>
          </div>
          <div class="card1-content">
           <div class="text-center">
              <v-progress-circular
                :value="63"
                :size="200"
                color="deep-orange lighten-2"
              >
              ผู้ใช้ทั้งหมด
              2,800 
              คน
              </v-progress-circular>
           </div>
            <v-card>
              <v-card-subtitle>
                ตัวบ่งชี้
              </v-card-subtitle>
              <v-card-text>
                <div class="male-content">
                  <div class="top-male-content">
                    <div class="text-male">
                      <v-icon x-small>mdi-circle</v-icon>
                      <v-icon>mdi-human-male</v-icon>
                      <!-- <v-icon>mdi-human-female</v-icon> -->
                      <span>ชาย</span>
                    </div>
                    <div>
                      1,471
                    </div>
                  </div>
                  <div class="bot-male-content">
                    <div class="male-subdt">
                      ค่าเฉลี่ยผู้ใช้งานเพศชายรายวัน
                    </div>
                    <div>
                      63%
                    </div>
                  </div>
                </div>
                <div class="female-content">
                  <div class="top-male-content">
                    <div class="text-male">
                      <v-icon x-small>mdi-circle</v-icon>
                      <v-icon>mdi-human-female</v-icon>
                      <span>หญิง</span>
                    </div>
                    <div>
                      1,329
                    </div>
                  </div>
                  <div class="bot-male-content">
                    <div class="male-subdt">
                      ค่าเฉลี่ยผู้ใช้งานเพศหญิงรายวัน
                    </div>
                    <div>
                      27%
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
            <v-card width="350">
              <v-card-subtitle>
                อุปกรณ์
              </v-card-subtitle>
              <div class="pd-10">
                <div class="brand-content">
                  <div class="text-brand">
                    <v-icon x-small>mdi-circle </v-icon>
                    <span> German</span>
                  </div>
                  <div>
                    395
                  </div>
                  <div>
                    14.1%
                  </div>
                </div>
                <div class="brand-content">
                  <div class="text-brand">
                    <v-icon x-small>mdi-circle </v-icon>
                    <span> Suunto</span>
                  </div>
                  <div>
                    422
                  </div>
                  <div>
                    15%
                  </div>
                </div>
                <div class="brand-content">
                  <div class="text-brand">
                    <v-icon x-small>mdi-circle </v-icon>
                    <span> Xiaomi</span>
                  </div>
                  <div>
                    796
                  </div>
                  <div>
                    28.4%
                  </div>
                </div>
                <div class="brand-content">
                  <div class="text-brand">
                    <v-icon x-small>mdi-circle </v-icon>
                    <span> Honor</span>
                  </div>
                  <div class="center-text">
                    <span>321</span>
                  </div>
                  <div class="center-text">
                    11.4%
                  </div>
                </div>
                <div class="brand-content">
                  <div class="text-brand">
                    <v-icon x-small>mdi-circle </v-icon>
                    <span> Apple Watch</span>
                  </div>
                  <div>
                    <span class="text-center">844</span>
                  </div>
                  <div>
                    31.1%
                  </div>
                </div>
                <div class="brand-content">
                  <div class="text-brand">
                    <v-icon x-small>mdi-circle </v-icon>
                    <span> อื่นๆ</span>
                  </div>
                  <div class="center-text">
                    22
                  </div>
                  <div class="center-text">
                    0.7%
                  </div>
                </div>
              </div>
            </v-card>
            <!-- <p>content</p> -->
          </div>
        </div>
      </v-card>

      <v-card elevation="2" outlined height="350" mt-3 pa-3>
        <div class="card1">
          <div class="head-card1">
            <div class="card1-left">
              <p>ช่วงอายุ</p>
            </div>
          </div>
          <div class="card1-content">
            <v-card>
              <v-card-subtitle>
                ตัวบ่งชี้
              </v-card-subtitle>
              <v-card-text>
                กราฟ
              </v-card-text>
            </v-card>
            <v-card>
              <v-card-title>
                เนื้อหา
              </v-card-title>
            </v-card>
            <!-- <p>content</p> -->
          </div>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
}
.head-card1 {
  display: flex;
  /* justify-items: space-between; */
  justify-content: space-between;
}
.card1-left {
  display: flex;
  width: 100%;
  justify-content: space-around;
  justify-items: space-around;
  padding: 10px;
}
.card1-right {
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: center;
  align-items: right;
}
.card1-content {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
}
.right-icon {
  display: flex;
  padding-left: 90%;
}
.male-content {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.female-content {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.top-male-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.text-male {
  display: flex;
}
.bot-male-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.male-subdt {
  font-size: 11px;
  padding-right: 40px;
  padding-left: 15px;
}

.item-set {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.all {
  display: flex;
  flex-direction: column;
}

.brand-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
}

.pd-10 {
  padding: 10px;
}
</style>
