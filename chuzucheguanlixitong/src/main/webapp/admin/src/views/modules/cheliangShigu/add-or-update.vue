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
                <el-col :span="12"  v-if="sessionTable !='cheliang'">
                    <el-form-item class="select" v-if="type!='info'"  label="车辆" prop="cheliangId">
                        <el-select v-model="ruleForm.cheliangId" :disabled="ro.cheliangId" filterable placeholder="请选择车辆" @change="cheliangChange">
                            <el-option
                                    v-for="(item,index) in cheliangOptions"
                                    v-bind:key="item.id"
                                    :label="item.cheliangName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='cheliang' ">
                    <el-form-item class="input" v-if="type!='info'"  label="车辆编号" prop="cheliangUuidNumber">
                        <el-input v-model="cheliangForm.cheliangUuidNumber"
                                  placeholder="车辆编号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="车辆编号" prop="cheliangUuidNumber">
                            <el-input v-model="ruleForm.cheliangUuidNumber"
                                      placeholder="车辆编号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='cheliang' ">
                    <el-form-item class="input" v-if="type!='info'"  label="车辆名称" prop="cheliangName">
                        <el-input v-model="cheliangForm.cheliangName"
                                  placeholder="车辆名称" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="车辆名称" prop="cheliangName">
                            <el-input v-model="ruleForm.cheliangName"
                                      placeholder="车辆名称" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='cheliang' ">
                    <el-form-item class="input" v-if="type!='info'"  label="车辆购买日期" prop="goumaiTime">
                        <el-input v-model="cheliangForm.goumaiTime"
                                  placeholder="车辆购买日期" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="车辆购买日期" prop="goumaiTime">
                            <el-input v-model="ruleForm.goumaiTime"
                                      placeholder="车辆购买日期" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='cheliang' ">
                    <el-form-item class="input" v-if="type!='info'"  label="车辆类型" prop="cheliangValue">
                        <el-input v-model="cheliangForm.cheliangValue"
                                  placeholder="车辆类型" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="车辆类型" prop="cheliangValue">
                            <el-input v-model="ruleForm.cheliangValue"
                                      placeholder="车辆类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='cheliang' ">
                    <el-form-item class="input" v-if="type!='info'"  label="车牌号" prop="cheliangChepaihao">
                        <el-input v-model="cheliangForm.cheliangChepaihao"
                                  placeholder="车牌号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="车牌号" prop="cheliangChepaihao">
                            <el-input v-model="ruleForm.cheliangChepaihao"
                                      placeholder="车牌号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
            <input id="cheliangId" name="cheliangId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="事故编号" prop="cheliangShiguUuidNumber">
                       <el-input v-model="ruleForm.cheliangShiguUuidNumber"
                                 placeholder="事故编号" clearable  :readonly="ro.cheliangShiguUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="事故编号" prop="cheliangShiguUuidNumber">
                           <el-input v-model="ruleForm.cheliangShiguUuidNumber"
                                     placeholder="事故编号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="事故名称" prop="cheliangShiguName">
                       <el-input v-model="ruleForm.cheliangShiguName"
                                 placeholder="事故名称" clearable  :readonly="ro.cheliangShiguName"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="事故名称" prop="cheliangShiguName">
                           <el-input v-model="ruleForm.cheliangShiguName"
                                     placeholder="事故名称" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.cheliangShiguFile" label="事故相关文件" prop="cheliangShiguFile">
                        <file-upload
                                tip="点击上传事故相关文件"
                                action="file/upload"
                                :limit="3"
                                :multiple="true"
                                :fileUrls="ruleForm.cheliangShiguFile?ruleForm.cheliangShiguFile:''"
                                @change="cheliangShiguFileUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.cheliangShiguFile" label="事故相关文件" prop="cheliangShiguFile">
                            <a type="text" style="text-decoration:none" class="el-button" :href="ruleForm.cheliangShiguFile"  >事故相关文件下载</a>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="事故详情" prop="cheliangShiguContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.cheliangShiguContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.cheliangShiguContent" label="事故详情" prop="cheliangShiguContent">
                            <span v-html="ruleForm.cheliangShiguContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item v-if="type!='info'"  class="input" label="发生事故时间" prop="cheliangShiguTime">
                        <el-date-picker
                                value-format="yyyy-MM-dd HH:mm:ss"
                                v-model="ruleForm.cheliangShiguTime"
                                type="datetime"
                                placeholder="发生事故时间"
                                :disabled="ro.cheliangShiguTime">
                        </el-date-picker>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.cheliangShiguTime" label="发生事故时间" prop="cheliangShiguTime">
                            <span v-html="ruleForm.cheliangShiguTime"></span>
                        </el-form-item>
                    </div>
                </el-col>

                <el-col :span="12">
                    <el-form-item v-if="type!='info'"  class="input" label="处理时间" prop="cheliangShiguChuliTime">
                        <el-date-picker
                                value-format="yyyy-MM-dd HH:mm:ss"
                                v-model="ruleForm.cheliangShiguChuliTime"
                                type="datetime"
                                placeholder="处理时间"
                                :disabled="ro.cheliangShiguChuliTime">
                        </el-date-picker>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.cheliangShiguChuliTime" label="处理时间" prop="cheliangShiguChuliTime">
                            <span v-html="ruleForm.cheliangShiguChuliTime"></span>
                        </el-form-item>
                    </div>
                </el-col>

                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="保险" prop="cheliangShiguBaoxianTypes">
                        <el-select v-model="ruleForm.cheliangShiguBaoxianTypes" :disabled="ro.cheliangShiguBaoxianTypes" placeholder="请选择保险">
                            <el-option
                                v-for="(item,index) in cheliangShiguBaoxianTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="保险" prop="cheliangShiguBaoxianValue">
                        <el-input v-model="ruleForm.cheliangShiguBaoxianValue"
                            placeholder="保险" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="责任方" prop="cheliangShiguZerenTypes">
                        <el-select v-model="ruleForm.cheliangShiguZerenTypes" :disabled="ro.cheliangShiguZerenTypes" placeholder="请选择责任方">
                            <el-option
                                v-for="(item,index) in cheliangShiguZerenTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="责任方" prop="cheliangShiguZerenValue">
                        <el-input v-model="ruleForm.cheliangShiguZerenValue"
                            placeholder="责任方" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="处理结果" prop="cheliangShiguChulijieguoContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.cheliangShiguChulijieguoContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.cheliangShiguChulijieguoContent" label="处理结果" prop="cheliangShiguChulijieguoContent">
                            <span v-html="ruleForm.cheliangShiguChulijieguoContent"></span>
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
                cheliangForm: {},
                ro:{
                    cheliangId: false,
                    cheliangShiguUuidNumber: false,
                    cheliangShiguName: false,
                    cheliangShiguFile: false,
                    cheliangShiguContent: false,
                    cheliangShiguTime: false,
                    cheliangShiguChuliTime: false,
                    cheliangShiguBaoxianTypes: false,
                    cheliangShiguZerenTypes: false,
                    cheliangShiguChulijieguoContent: false,
                    insertTime: false,
                },
                ruleForm: {
                    cheliangId: '',
                    cheliangShiguUuidNumber: new Date().getTime(),
                    cheliangShiguName: '',
                    cheliangShiguFile: '',
                    cheliangShiguContent: '',
                    cheliangShiguTime: '',
                    cheliangShiguChuliTime: '',
                    cheliangShiguBaoxianTypes: '',
                    cheliangShiguZerenTypes: '',
                    cheliangShiguChulijieguoContent: '',
                    insertTime: '',
                },
                cheliangShiguBaoxianTypesOptions : [],
                cheliangShiguZerenTypesOptions : [],
                cheliangOptions : [],
                rules: {
                   cheliangId: [
                              { required: true, message: '车辆不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   cheliangShiguUuidNumber: [
                              { required: true, message: '事故编号不能为空', trigger: 'blur' },
                          ],
                   cheliangShiguName: [
                              { required: true, message: '事故名称不能为空', trigger: 'blur' },
                          ],
                   cheliangShiguFile: [
                              { required: true, message: '事故相关文件不能为空', trigger: 'blur' },
                          ],
                   cheliangShiguContent: [
                              { required: true, message: '事故详情不能为空', trigger: 'blur' },
                          ],
                   cheliangShiguTime: [
                              { required: true, message: '发生事故时间不能为空', trigger: 'blur' },
                          ],
                   cheliangShiguChuliTime: [
                              { required: true, message: '处理时间不能为空', trigger: 'blur' },
                          ],
                   cheliangShiguBaoxianTypes: [
                              { required: true, message: '保险不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   cheliangShiguZerenTypes: [
                              { required: true, message: '责任方不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   cheliangShiguChulijieguoContent: [
                              { required: true, message: '处理结果不能为空', trigger: 'blur' },
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
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=cheliang_shigu_baoxian_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.cheliangShiguBaoxianTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=cheliang_shigu_zeren_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.cheliangShiguZerenTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `cheliang/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.cheliangOptions = data.data.list;
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
            cheliangChange(id){
                this.$http({
                    url: `cheliang/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.cheliangForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `cheliangShigu/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.cheliangChange(data.data.cheliangId)
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
                            url:`cheliangShigu/${!this.ruleForm.id ? "save" : "update"}`,
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
                                        this.parent.cheliangShiguCrossAddOrUpdateFlag = false;
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
                this.parent.cheliangShiguCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            cheliangShiguFileUploadChange(fileUrls){
                this.ruleForm.cheliangShiguFile = fileUrls;
                this.addEditUploadStyleChange()
            },

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

