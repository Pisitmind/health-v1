<div class="text-male">
                      <v-icon x-small :style="{ color: item.color }"
                        >mdi-circle</v-icon
                      >
                      <v-icon :style="{ color: item.color }">{{
                        item.icon
                      }}</v-icon>
                      <span class="black--text"
                        ><strong>{{ item.gender }}</strong></span
                      >
                    </div>