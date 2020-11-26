<template>
   <table class="">
                                  <tr height="30px" class="">
                                    <td width="260px" class="text_lft">
                                      <span
                                        >ค่าเฉลี่ยการเต้นของหัวใจ ผู้หญิง</span
                                      >
                                    </td>
                                    <td width="" class="btn_right">
                                      <v-btn
                                        color="#22CE8B"
                                        depressed
                                        x-small
                                        class="white--text"
                                        elevation="2"
                                        >+4%</v-btn
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div class="">
                                        <canvas
                                          id="graph_wman"
                                          width="150px"
                                          height="70px"
                                        ></canvas>
                                      </div>
                                    </td>
                                    <td height="30px">
                                      <div class="">
                                        <table class="align-center">
                                          <tr class="bold_tx big_text">
                                            <span>34</span>
                                          </tr>
                                          <tr class="grey--text">
                                            <td></td>
                                            <td class="sm_text">
                                              <span>
                                                BPM
                                              </span>
                                            </td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
</template>

<script>
export default {

}
</script>

<style>

</style>