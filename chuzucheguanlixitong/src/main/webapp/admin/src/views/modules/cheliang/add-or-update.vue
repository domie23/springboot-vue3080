<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="80px"
                :style="{backgroundColor:addEditForm.addEditBoxColor}">
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='jiashiyuan'">
                    <el-form-item class="select" v-if="type!='info'"  label="驾驶员" prop="jiashiyuanId">
                        <el-select v-model="ruleForm.jiashiyuanId" :disabled="ro.jiashiyuanId" filterable placeholder="请选择驾驶员" @change="jiashiyuanChange">
                            <el-option
                                    v-for="(item,index) in jiashiyuanOptions"
                                    v-bind:key="item.id"
                                    :label="item.jiashiyuanName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='jiashiyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="驾驶员姓名" prop="jiashiyuanName">
                        <el-input v-model="jiashiyuanForm.jiashiyuanName"
                                  placeholder="驾驶员姓名" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="驾驶员姓名" prop="jiashiyuanName">
                            <el-input v-model="ruleForm.jiashiyuanName"
                                      placeholder="驾驶员姓名" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='jiashiyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="驾驶员手机号" prop="jiashiyuanPhone">
                        <el-input v-model="jiashiyuanForm.jiashiyuanPhone"
                                  placeholder="驾驶员手机号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="驾驶员手机号" prop="jiashiyuanPhone">
                            <el-input v-model="ruleForm.jiashiyuanPhone"
                                      placeholder="驾驶员手机号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='jiashiyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="驾驶员身份证号" prop="jiashiyuanIdNumber">
                        <el-input v-model="jiashiyuanForm.jiashiyuanIdNumber"
                                  placeholder="驾驶员身份证号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="驾驶员身份证号" prop="jiashiyuanIdNumber">
                            <el-input v-model="ruleForm.jiashiyuanIdNumber"
                                      placeholder="驾驶员身份证号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='jiashiyuan' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.jiashiyuanPhoto" label="驾驶员头像" prop="jiashiyuanPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (jiashiyuanForm.jiashiyuanPhoto || '').split(',')" :src="item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.jiashiyuanPhoto" label="驾驶员头像" prop="jiashiyuanPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.jiashiyuanPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='jiashiyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="年龄" prop="age">
                        <el-input v-model="jiashiyuanForm.age"
                                  placeholder="年龄" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="年龄" prop="age">
                            <el-input v-model="ruleForm.age"
                                      placeholder="年龄" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='jiashiyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="驾龄" prop="jiashiyuanJialing">
                        <el-input v-model="jiashiyuanForm.jiashiyuanJialing"
                                  placeholder="驾龄" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="驾龄" prop="jiashiyuanJialing">
                            <el-input v-model="ruleForm.jiashiyuanJialing"
                                      placeholder="驾龄" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='jiashiyuan' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.jiashiyuanFuwuzigezhengPhoto" label="服务资格证照片" prop="jiashiyuanFuwuzigezhengPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (jiashiyuanForm.jiashiyuanFuwuzigezhengPhoto || '').split(',')" :src="item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.jiashiyuanFuwuzigezhengPhoto" label="服务资格证照片" prop="jiashiyuanFuwuzigezhengPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.jiashiyuanFuwuzigezhengPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='jiashiyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="电子邮箱" prop="jiashiyuanEmail">
                        <el-input v-model="jiashiyuanForm.jiashiyuanEmail"
                                  placeholder="电子邮箱" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="电子邮箱" prop="jiashiyuanEmail">
                            <el-input v-model="ruleForm.jiashiyuanEmail"
                                      placeholder="电子邮箱" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='jiashiyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="现住址" prop="jiashiyuanAddress">
                        <el-input v-model="jiashiyuanForm.jiashiyuanAddress"
                                  placeholder="现住址" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="现住址" prop="jiashiyuanAddress">
                            <el-input v-model="ruleForm.jiashiyuanAddress"
                                      placeholder="现住址" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='jiashiyuan' ">
                    <el-form-item class="input" v-if="type!='info'"  label="户籍地址" prop="jiashiyuanHujiAddress">
                        <el-input v-model="jiashiyuanForm.jiashiyuanHujiAddress"
                                  placeholder="户籍地址" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="户籍地址" prop="jiashiyuanHujiAddress">
                            <el-input v-model="ruleForm.jiashiyuanHujiAddress"
                                      placeholder="户籍地址" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
            <input id="jiashiyuanId" name="jiashiyuanId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="车辆编号" prop="cheliangUuidNumber">
                       <el-input v-model="ruleForm.cheliangUuidNumber"
                                 placeholder="车辆编号" clearable  :readonly="ro.cheliangUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="车辆编号" prop="cheliangUuidNumber">
                           <el-input v-model="ruleForm.cheliangUuidNumber"
                                     placeholder="车辆编号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="车辆名称" prop="cheliangName">
                       <el-input v-model="ruleForm.cheliangName"
                                 placeholder="车辆名称" clearable  :readonly="ro.cheliangName"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="车辆名称" prop="cheliangName">
                           <el-input v-model="ruleForm.cheliangName"
                                     placeholder="车辆名称" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item v-if="type!='info'"  class="input" label="车辆购买日期" prop="goumaiTime">
                        <el-date-picker
                                value-format="yyyy-MM-dd HH:mm:ss"
                                v-model="ruleForm.goumaiTime"
                                type="datetime"
                                placeholder="车辆购买日期"
                                :disabled="ro.goumaiTime">
                        </el-date-picker>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.goumaiTime" label="车辆购买日期" prop="goumaiTime">
                            <span v-html="ruleForm.goumaiTime"></span>
                        </el-form-item>
                    </div>
                </el-col>

                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="车辆类型" prop="cheliangTypes">
                        <el-select v-model="ruleForm.cheliangTypes" :disabled="ro.cheliangTypes" placeholder="请选择车辆类型">
                            <el-option
                                v-for="(item,index) in cheliangTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="车辆类型" prop="cheliangValue">
                        <el-input v-model="ruleForm.cheliangValue"
                            placeholder="车辆类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="车牌号" prop="cheliangChepaihao">
                       <el-input v-model="ruleForm.cheliangChepaihao"
                                 placeholder="车牌号" clearable  :readonly="ro.cheliangChepaihao"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="车牌号" prop="cheliangChepaihao">
                           <el-input v-model="ruleForm.cheliangChepaihao"
                                     placeholder="车牌号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="车辆详情" prop="cheliangContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.cheliangContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.cheliangContent" label="车辆详情" prop="cheliangContent">
                            <span v-html="ruleForm.cheliangContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                jiashiyuanForm: {},
                ro:{
                    jiashiyuanId: false,
                    cheliangUuidNumber: false,
                    cheliangName: false,
                    goumaiTime: false,
                    cheliangTypes: false,
                    cheliangChepaihao: false,
                    cheliangContent: false,
                    insertTime: false,
                },
                ruleForm: {
                    jiashiyuanId: '',
                    cheliangUuidNumber: new Date().getTime(),
                    cheliangName: '',
                    goumaiTime: '',
                    cheliangTypes: '',
                    cheliangChepaihao: '',
                    cheliangContent: '',
                    insertTime: '',
                },
                cheliangTypesOptions : [],
                jiashiyuanOptions : [],
                rules: {
                   jiashiyuanId: [
                              { required: true, message: '驾驶员不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   cheliangUuidNumber: [
                              { required: true, message: '车辆编号不能为空', trigger: 'blur' },
                          ],
                   cheliangName: [
                              { required: true, message: '车辆名称不能为空', trigger: 'blur' },
                          ],
                   goumaiTime: [
                              { required: true, message: '车辆购买日期不能为空', trigger: 'blur' },
                          ],
                   cheliangTypes: [
                              { required: true, message: '车辆类型不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   cheliangChepaihao: [
                              { required: true, message: '车牌号不能为空', trigger: 'blur' },
                          ],
                   cheliangContent: [
                              { required: true, message: '车辆详情不能为空', trigger: 'blur' },
                          ],
                   insertTime: [
                              { required: true, message: '录入时间不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");


            if (this.role != "管理员"){
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=cheliang_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.cheliangTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `jiashiyuan/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.jiashiyuanOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            jiashiyuanChange(id){
                this.$http({
                    url: `jiashiyuan/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.jiashiyuanForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `cheliang/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.jiashiyuanChange(data.data.jiashiyuanId)
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.$http({
                            url:`cheliang/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.cheliangCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.cheliangCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}</style>

