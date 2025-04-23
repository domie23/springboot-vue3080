<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      label-width="80px"
    >  
     <el-row>
                    <el-col :span="12">
           <el-form-item v-if="flag=='jiashiyuan'"  label='驾驶员姓名' prop="jiashiyuanName">
               <el-input v-model="ruleForm.jiashiyuanName"  placeholder='驾驶员姓名' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='jiashiyuan'"  label='驾驶员手机号' prop="jiashiyuanPhone">
               <el-input v-model="ruleForm.jiashiyuanPhone"  placeholder='驾驶员手机号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='jiashiyuan'"  label='驾驶员身份证号' prop="jiashiyuanIdNumber">
               <el-input v-model="ruleForm.jiashiyuanIdNumber"  placeholder='驾驶员身份证号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='jiashiyuan'" label='驾驶员头像' prop="jiashiyuanPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.jiashiyuanPhoto?ruleForm.jiashiyuanPhoto:''"
                         @change="jiashiyuanPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='jiashiyuan'"  label='年龄' prop="age">
               <el-input v-model="ruleForm.age"  placeholder='年龄' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='jiashiyuan'"  label='驾龄' prop="jiashiyuanJialing">
               <el-input v-model="ruleForm.jiashiyuanJialing"  placeholder='驾龄' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='jiashiyuan'" label='服务资格证照片' prop="jiashiyuanFuwuzigezhengPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.jiashiyuanFuwuzigezhengPhoto?ruleForm.jiashiyuanFuwuzigezhengPhoto:''"
                         @change="jiashiyuanFuwuzigezhengPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='jiashiyuan'"  label='电子邮箱' prop="jiashiyuanEmail">
               <el-input v-model="ruleForm.jiashiyuanEmail"  placeholder='电子邮箱' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='jiashiyuan'"  label='现住址' prop="jiashiyuanAddress">
               <el-input v-model="ruleForm.jiashiyuanAddress"  placeholder='现住址' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='jiashiyuan'"  label='户籍地址' prop="jiashiyuanHujiAddress">
               <el-input v-model="ruleForm.jiashiyuanHujiAddress"  placeholder='户籍地址' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-form-item v-if="flag=='users'" label="用户名" prop="username">
             <el-input v-model="ruleForm.username"
                       placeholder="用户名"></el-input>
         </el-form-item>
         <el-col :span="12">
             <el-form-item v-if="flag!='users'"  label="性别" prop="sexTypes">
                 <el-select v-model="ruleForm.sexTypes" placeholder="请选择性别">
                     <el-option
                             v-for="(item,index) in sexTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="24">
             <el-form-item>
                 <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
             </el-form-item>
         </el-col>
     </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
        ruleForm: {},
        flag: '',
        usersFlag: false,
        // sexTypesOptions : [],
// 注册表 驾驶员
    // 注册的类型字段 驾驶员
        // 性别
        sexTypesOptions : [],
    };
  },
  mounted() {
    //获取当前登录用户的信息
    var table = this.$storage.get("sessionTable");
    this.sessionTable = this.$storage.get("sessionTable");
    this.role = this.$storage.get("role");
    if (this.role != "管理员"){
    }

    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
// 注册表 驾驶员
      } else {
        this.$message.error(data.msg);
      }
    });

// 注册表 驾驶员 的级联表

      this.$http({
          url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=sex_types`,
          method: "get"
      }).then(({ data }) => {
          if (data && data.code === 0) {
              this.sexTypesOptions = data.data.list;
          } else {
              this.$message.error(data.msg);
          }
      });
  },
  methods: {
    chongzhi() {
      this.$router.replace({ path: "/pay" });
    },
    jiashiyuanPhotoUploadChange(fileUrls) {
        this.ruleForm.jiashiyuanPhoto = fileUrls;
    },
    jiashiyuanFuwuzigezhengPhotoUploadChange(fileUrls) {
        this.ruleForm.jiashiyuanFuwuzigezhengPhoto = fileUrls;
    },


    onUpdateHandler() {
                         if((!this.ruleForm.jiashiyuanName)&& 'jiashiyuan'==this.flag){
                             this.$message.error('驾驶员姓名不能为空');
                             return
                         }

                             if( 'jiashiyuan' ==this.flag && this.ruleForm.jiashiyuanPhone&&(!isMobile(this.ruleForm.jiashiyuanPhone))){
                                 this.$message.error(`手机应输入手机格式`);
                                 return
                             }
                         if((!this.ruleForm.jiashiyuanIdNumber)&& 'jiashiyuan'==this.flag){
                             this.$message.error('驾驶员身份证号不能为空');
                             return
                         }

                         if((!this.ruleForm.jiashiyuanPhoto)&& 'jiashiyuan'==this.flag){
                             this.$message.error('驾驶员头像不能为空');
                             return
                         }

                         if((!this.ruleForm.age)&& 'jiashiyuan'==this.flag){
                             this.$message.error('年龄不能为空');
                             return
                         }

                         if((!this.ruleForm.jiashiyuanJialing)&& 'jiashiyuan'==this.flag){
                             this.$message.error('驾龄不能为空');
                             return
                         }

                         if((!this.ruleForm.jiashiyuanFuwuzigezhengPhoto)&& 'jiashiyuan'==this.flag){
                             this.$message.error('服务资格证照片不能为空');
                             return
                         }

                             if( 'jiashiyuan' ==this.flag && this.ruleForm.jiashiyuanEmail&&(!isEmail(this.ruleForm.jiashiyuanEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.jiashiyuanAddress)&& 'jiashiyuan'==this.flag){
                             this.$message.error('现住址不能为空');
                             return
                         }

                         if((!this.ruleForm.jiashiyuanHujiAddress)&& 'jiashiyuan'==this.flag){
                             this.$message.error('户籍地址不能为空');
                             return
                         }

        if((!this.ruleForm.sexTypes) && this.flag!='users'){
            this.$message.error('性别不能为空');
            return
        }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
        this.$message.error(`用户名不能为空`);
        return	
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
