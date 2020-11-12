 <v-card class="card2-subcard-3" width="350px">
              <v-card-subtitle>
                <span class="topic-name-card">
                  ตัวบ่งชี้
                </span>
              </v-card-subtitle>
              <div class="card-info-right pa-1 set-center">
                <div class="brand-content">
                  <div class="text-ageRange">
                    <span>ช่วงอายุ</span>
                  </div>
                  <div>
                    <span>ชาย</span>
                  </div>
                  <div>
                    <span>หญิง</span>
                  </div>
                  <div>
                    <span>เฉลี่ยรวม</span>
                  </div>
                </div>
              </div>

              <div
                class="card-info-right pa-1 set-center "
                v-for="item in data_card2_info"
                :key="item.id"
              >
                <div class="brand-content">
                  <div class="text-brand">
                    <v-icon x-small :style="{ color: item.color }"
                      >mdi-circle
                    </v-icon>
                    <span> {{ item.name }}</span>
                  </div>
                  <div>
                    {{ item.dataMan }}
                  </div>
                  <div>
                    {{ item.dataWman }}
                  </div>
                  <div>
                    {{ item.avg }}
                  </div>
                </div>
              </div>
            </v-card>