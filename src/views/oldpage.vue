 <table class="card2-table">
                          <tr>
                            <th height="15px">กิจกรรม</th>
                            <th>ชาย</th>
                            <th>หญิง</th>
                            <th>เฉลี่ยรวม</th>
                          </tr>
                          <tr
                            v-for="item in data_card2_p5"
                            :key="item.id"
                            height="15px"
                          >
                            <td class="two-data-card2">
                              <v-icon x-small :style="{ color: item.color }"
                                >mdi-circle
                              </v-icon>
                              {{ item.name }}
                            </td>
                            <td>{{ item.dataMan }}</td>
                            <td>{{ item.dataWman }}</td>
                            <td>{{ item.avg }}</td>
                          </tr>
                        </table>