<template>
  <div>
     <table style="width:100%">
        <tr>
          <th width="20%">aaaa</th>
          <th>
            <div class="card5-top-content">
              <div class="graph6-details ">
                <!-- แถบprogress -->
                <div class="progress-el">
                  <v-progress-linear
                    color="none"
                    rounded
                    value="100"
                  ></v-progress-linear>
                  <br />
                  <span class="text-top">56.7กก.</span>
                  <v-progress-linear
                    color="none"
                    rounded
                    value="100"
                  ></v-progress-linear>
                  <br />
                  <span class="text-top">76.6กก.</span>
                  <v-progress-linear
                    color="none"
                    rounded
                    value="100"
                  ></v-progress-linear>
                  <br />
                  <span class="text-top">85.8กก.</span>
                  <v-progress-linear
                    color="none"
                    rounded
                    value="100"
                  ></v-progress-linear>
                  <br />
                  <span class="text-top">98.0กก.</span>
                  <v-progress-linear
                    color="none"
                    rounded
                    value="100"
                  ></v-progress-linear>
                </div>
                <div class="progress-el">
                  <v-progress-linear
                    color="purple darken-2"
                    rounded
                    value="100"
                  ></v-progress-linear>
                  <br />
                  <v-progress-linear
                    color="blue darken-2"
                    rounded
                    value="100"
                  ></v-progress-linear>
                  <br />
                  <v-progress-linear
                    color="green darken-2"
                    rounded
                    value="100"
                  ></v-progress-linear>
                  <br />
                  <v-progress-linear
                    color="yellow darken-2"
                    rounded
                    value="100"
                  ></v-progress-linear>
                  <br />
                  <v-progress-linear
                    color="red darken-2"
                    rounded
                    value="100"
                  ></v-progress-linear>
                </div>
                <br />
              </div>
            </div>
          </th>
        </tr>

        <tr width="100%">
          <td width="20%" align="center">head</td>
          <td style="background-color:gray;">
            <th><div class="i-human">
                <div><v-icon>mdi-human-male</v-icon></div>
                <br />
                <div><p>ผอมมาก</p></div>
              </div></th>
              <th></th>
          </td>
          <td class="test-d" style="background-color:gray;">
            <tr align="center">
              <td scope="col " style="background-color:red;">
                <div class="i-human">
                  <div><v-icon>mdi-human-male</v-icon></div>
                  <div><p>ผอมมาก</p></div>
                </div>
              </td>
               <br />
              <td scope="col" style="background-color:white;">
                <div class="i-human">
                  <div><v-icon>mdi-human-male</v-icon></div>
                  <div><p>ปกติ</p></div>
                </div>
              </td>
               <br />
              <td scope="col" style="background-color:pink;">
                <div class="i-human">
                  <div><v-icon>mdi-human-male</v-icon></div>
                  <div><p>อวบ</p></div>
                </div>
              </td>
               <br />
              <td scope="col" style="background-color:purple;">
                <div class="i-human">
                  <div><v-icon>mdi-human-male</v-icon></div>
                  <div><p>อ้วน ระยะที่1</p></div>
                </div>
              </td>
               <br />
              <td scope="col" style="background-color:yellow;">
                <div class="i-human">
                  <div><v-icon>mdi-human-male</v-icon></div>
                  <div><p>อ้วน ระยะที่2</p></div>
                </div>
              </td>
               <br />
            </tr>
          </td>
        </tr>

        <tr width="100%">
          <td width="20%" align="center">head</td>
          <td style="background-color:gray;">
            <th>ชื่อ</th>
            <tr> 5</tr>
          </td>
          <td>d</td>
        </tr>

        <td>
          <!-- ใส่ในนี้ -->
          <tr align="">
            <th></th>
            <th scope="col">
              <div class="i-human">
                <div><v-icon>mdi-human-male</v-icon></div>
                <div><p>ผอมมาก</p></div>
              </div>
            </th>
            <th scope="col">
              <div class="i-human">
                <div><v-icon>mdi-human-male</v-icon></div>
                <div><p>ปกติ</p></div>
              </div>
            </th>
            <th scope="col">
              <div class="i-human">
                <div><v-icon>mdi-human-male</v-icon></div>
                <div><p>อวบ</p></div>
              </div>
            </th>
            <th scope="col">
              <div class="i-human">
                <div><v-icon>mdi-human-male</v-icon></div>
                <div><p>อ้วน ระยะที่1</p></div>
              </div>
            </th>
            <th scope="col">
              <div class="i-human">
                <div><v-icon>mdi-human-male</v-icon></div>
                <div><p>อ้วน ระยะที่2</p></div>
              </div>
            </th>
          </tr>

          <tr v-for="item in items" :key="item.id" align="center">
            <th scope="row">
              <v-icon :style="{ color: item.color }">{{ item.icon }}</v-icon>
              <span class="black--text"
                ><strong>{{ item.gender }}</strong></span
              >
            </th>
            <td v-for="n in 6" :key="n" border="1px solid black;" width="">
              {{ item.data[n - 1] }}
            </td>
          </tr>
        </td>
      </table>
      <br />
  </div>
</template>