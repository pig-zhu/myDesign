<template>
  <div class="reg_form">
    <div class="form">
      <div class="form_title">心理热线电话咨询登记表</div>
    </div>
    <div :class="{form_content:true, errorBox:rules.date} " id='date'>
        <div class="form_label" ><span class="required">* </span>1. 咨询日期</div>
        <!-- <div class="form_qinsert">xx月xx日xx时（24小时制）</div> -->
        <div class="date-picker" >
           <el-date-picker
             v-model="form.date"
             type="datetime"
             size="medium"
             style="width:100%;"
             format="yyyy-MM-dd HH:mm"
             value-format="yyyy-MM-dd HH:mm"
             @change="handleChange(form.date, 'date')"
             placeholder="选择日期时间">
           </el-date-picker>
         <!-- <el-date-picker
          v-model="form.date"
          type="date"
          size="medium"
          style="width:100%;"
          format="yyyy年MM月dd日"
          value-format="yyyy年MM月dd日"
          @change="handleChange(form.date, 'date')"
          placeholder="选择日期">
         </el-date-picker> -->
        </div>
        <!-- <div class="ui-input-text" >
          <input type="text" v-model="form.date" @input="handleChange(form.date, 'date')">
        </div> -->
        <transition name="slide-fade">
        <div v-show="rules.date" class="errorMessage" style="line-height: 38px;" >请选择日期</div>
        </transition>
    </div>

    <div :class="{form_content:true, errorBox:rules.name}" id='name'>
        <div class="form_label" ><span class="required">* </span>2. 咨客姓名</div>
        <div class="form_qinsert">若咨客不愿透露，写不详</div>
        <div class="ui-input-text" >
          <input type="text" v-model="form.name" @input="handleChange(form.name, 'name')">
        </div>
        <transition name="slide-fade">
          <div v-show="rules.name" class="errorMessage" style="line-height: 38px;" >请输入内容</div>
        </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.gender}" id='gender'>
        <div class="form_label"><span class="required">* </span>3. 咨客性别</div>
        <div class="ui-input-text radio" >
           <el-radio-group v-model="form.gender" @change="value=>handleRadio(value,'gender')">
            <el-radio :label="'男'" >男</el-radio>
            <el-radio :label="'女'" >女</el-radio>
          </el-radio-group>
        </div>
         <transition name="slide-fade">
        <div v-show="rules.gender" class="errorMessage" style="line-height: 38px;" >请选择选项</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.age}" id='age'>
        <div class="form_label"><span class="required">* </span>4. 咨客年龄</div>
        <div class="ui-input-text radio" >
           <el-radio-group v-model="form.age" @change="value=>handleRadio(value,'age')">
            <el-radio :label="'0-18岁'" >0-18岁</el-radio>
            <el-radio :label="'19-30岁'" >19-30岁</el-radio>
            <el-radio :label="'31-50岁'" >31-50岁</el-radio>
            <el-radio :label="'51-65岁'" >51-65岁</el-radio>
            <el-radio :label="'65岁以上'" >65岁以上</el-radio>
            <el-radio :label="'不详'" >不详</el-radio>
          </el-radio-group>
        </div>
         <transition name="slide-fade">
        <div v-show="rules.age" class="errorMessage" style="line-height: 38px;" >请选择选项</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.maritalStatus}" id='maritalStatus'>
        <div class="form_label"><span class="required">* </span>5. 咨客婚姻情况</div>
        <div class="ui-input-text radio" >
           <el-radio-group v-model="form.maritalStatus" @change="value=>handleRadio(value,'maritalStatus')">
            <el-radio :label="'已婚'" >已婚</el-radio>
            <el-radio :label="'未婚'" >未婚</el-radio>
            <el-radio :label="'丧偶'" >丧偶</el-radio>
            <el-radio :label="'离婚'" >离婚</el-radio>
            <el-radio :label="'其他'" >其他</el-radio>
          </el-radio-group>
        </div>
         <transition name="slide-fade">
        <div v-show="rules.maritalStatus" class="errorMessage" style="line-height: 38px;" >请选择选项</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.education}" id='education' >
        <div class="form_label"><span class="required">* </span>6. 咨客文化程度</div>
        <div class="ui-input-text radio" >
           <el-radio-group v-model="form.education" @change="value=>handleRadio(value,'education')">
            <el-radio :label="'小学以下'" >小学以下</el-radio>
            <el-radio :label="'初中'" >初中</el-radio>
            <el-radio :label="'高中'" >高中</el-radio>
            <el-radio :label="'大专'" >大专</el-radio>
            <el-radio :label="'本科'" >本科</el-radio>
            <el-radio :label="'研究生及以上'" >研究生及以上</el-radio>
            <el-radio :label="'不详'" >不详</el-radio>
          </el-radio-group>
        </div>
         <transition name="slide-fade">
        <div v-show="rules.education" class="errorMessage" style="line-height: 38px;" >请选择选项</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.classify}" id='classify'>
        <div class="form_label"><span class="required">* </span>7. 咨客分类</div>
        <div class="ui-input-text radio" >
           <el-radio-group v-model="form.classify" @change="value=>handleRadio(value,'classify')">
            <el-radio :label="'大众'" >大众</el-radio>
            <el-radio :label="'医务人员（医、护、技、后勤）'" >
              <span>
                医务人员（医、护、技、后勤）
              </span>
              <div>
              <input type="text" v-model="classify" class="checkInput">
              </div></el-radio>
            <el-radio :label="'精神障碍者'" >精神障碍者</el-radio>
            <el-radio :label="'其他'" >其他</el-radio>
          </el-radio-group>
        </div>
         <transition name="slide-fade">
        <div v-show="rules.classify" class="errorMessage" style="line-height: 38px;" >请选择选项</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.address}" id='address'>
        <div class="form_label"><span class="required">* </span>8. 目前人在哪里</div>
        <div class="ui-input-text radio" >
           <el-radio-group v-model="form.address" @change="value=>handleRadio(value,'address')">
            <el-radio :label="'湖北省武汉市'" >湖北省武汉市</el-radio>
            <el-radio :label="'湖北省、武汉市外的其他市'" >
              <span>
                湖北省、武汉市外的其他市
              </span>
              <div>
              <span class="requiredInput">*</span><input type="text" v-model="address['2']" @input="radioIpt(2)" class="checkInput2">
              </div>
            </el-radio>
            <el-radio :label="'湖北省外其他省市'" >
              <span>
                湖北省外其他省市
              </span>
              <div>
              <span class="requiredInput">*</span><input type="text" v-model="address['3']"
              @input="radioIpt(3)" class="checkInput2">
              </div>
            </el-radio>
            <el-radio :label="'国外或海外'" >
              <span>
                国外或海外
              </span>
              <div>
              <span class="requiredInput">*</span><input type="text" v-model="address['4']" @input="radioIpt(4)" class="checkInput2">
              </div>
            </el-radio>
            <el-radio :label="'不详'" >不详</el-radio>
          </el-radio-group>
        </div>
         <transition name="slide-fade">
        <div v-show="rules.address===2"  class="errorMessage" style="line-height: 38px;" >请选择选项</div>
         </transition>
         <transition name="slide-fade">
        <div v-show="rules.address===1"  class="errorMessage" style="line-height: 38px;" >文本框内容必须填写！</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.purposeClassify}" id='purposeClassify'>
        <div class="form_label"><span class="required">* </span>9. 来电目的分类<span class="qtypetip">&nbsp;【多选题】</span></div>
        <div class="ui-input-text checkBox" >
          <el-checkbox-group v-model="form.purposeClassify" @change="value=>handleCheck(value,'purposeClassify')">
            <el-checkbox :label="'了解新肺炎预防知识'">了解新肺炎预防知识</el-checkbox>
            <el-checkbox :label="'了解因肺炎产生的心理危机'">了解因肺炎产生的心理危机</el-checkbox>
            <el-checkbox :label="'来电想做志愿者'">来电想做志愿者</el-checkbox>
            <el-checkbox :label="'其他'">
              <span>
                其他
              </span>
              <div>
              <span class="requiredInput2">*</span><input type="text" v-model="purposeClassify" @input="checkIpt(purposeClassify,'purposeClassify')" class="checkInput3">
              </div>
            </el-checkbox>
          </el-checkbox-group>
        </div>
        <transition name="slide-fade">
        <div v-show="rules.purposeClassify===2"  class="errorMessage" style="line-height: 38px;" >请选择选项</div>
         </transition>
         <transition name="slide-fade">
        <div v-show="rules.purposeClassify===1"  class="errorMessage" style="line-height: 38px;" >文本框内容必须填写！</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.symptomClassify}" id='symptomClassify'>
        <div class="form_label"><span class="required">* </span>10. 咨客症状分类<span class="qtypetip">&nbsp;【多选题】</span></div>
        <div class="ui-input-text checkBox" >
          <el-checkbox-group v-model="form.symptomClassify" @change="value=>handleCheck(value,'symptomClassify')">
            <el-checkbox :label="'躯体化'">躯体化</el-checkbox>
            <el-checkbox :label="'抑郁症状'">抑郁症状</el-checkbox>
            <el-checkbox :label="'焦虑症状'">焦虑症状</el-checkbox>
            <el-checkbox :label="'睡眠症状'">睡眠症状</el-checkbox>
            <el-checkbox :label="'疑病症状'">疑病症状</el-checkbox>
            <el-checkbox :label="'其他'">
              <span>
                其他
              </span>
              <div>
              <span class="requiredInput2">*</span><input type="text" v-model="symptomClassify"
              @input="checkIpt(symptomClassify ,'symptomClassify')" class="checkInput3">
              </div>
            </el-checkbox>
          </el-checkbox-group>
        </div>
        <transition name="slide-fade">
        <div v-show="rules.symptomClassify===2"  class="errorMessage" style="line-height: 38px;" >请选择选项</div>
         </transition>
         <transition name="slide-fade">
        <div v-show="rules.symptomClassify===1"  class="errorMessage" style="line-height: 38px;" >文本框内容必须填写！</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.physicalCondition}" id='physicalCondition'>
        <div class="form_label"><span class="required">* </span>11. 咨客身体情况</div>
        <div class="ui-input-text radio" >
           <el-radio-group v-model="form.physicalCondition" @change="value=>handleRadio(value,'physicalCondition')">
            <el-radio :label="'确诊新型冠状病毒'" >确诊新型冠状病毒</el-radio>
            <el-radio :label="'未确诊但有发烧、咳嗽等症状'" >未确诊但有发烧、咳嗽等症状</el-radio>
            <el-radio :label="'普通感冒'" >普通感冒</el-radio>
            <el-radio :label="'健康'" >健康</el-radio>
            <el-radio :label="'其他'" >
              <span>
                其他
              </span>
              <div>
              <input type="text" v-model="physicalCondition" class="checkInput">
              </div>
            </el-radio>
          </el-radio-group>
        </div>
        <transition name="slide-fade">
        <div v-show="rules.physicalCondition===2"  class="errorMessage" style="line-height: 38px;" >请选择选项</div>
         </transition>
         <transition name="slide-fade">
        <div v-show="rules.physicalCondition===1"  class="errorMessage" style="line-height: 38px;" >文本框内容必须填写！</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.infection}" id='infection'>
        <div class="form_label"><span class="required">* </span>12. 咨客周边感染新型冠状病毒情况<span class="qtypetip">&nbsp;【多选题】</span></div>
        <div class="ui-input-text checkBox" >
          <el-checkbox-group v-model="form.infection" @change="value=>handleCheck(value,'infection')">
            <el-checkbox :label="'无人感染'">无人感染</el-checkbox>
            <el-checkbox :label="'家人确诊感染'">家人确诊感染</el-checkbox>
            <el-checkbox :label="'家人疑似感染'">家人疑似感染</el-checkbox>
            <el-checkbox :label="'亲属感染'">亲属感染</el-checkbox>
            <el-checkbox :label="'亲属疑似感染'">亲属疑似感染</el-checkbox>
            <el-checkbox :label="'同事、朋友感染'">同事、朋友感染</el-checkbox>
            <el-checkbox :label="'同事、朋友疑似感染'">同事、朋友疑似感染</el-checkbox>
            <el-checkbox :label="'周边邻居有感染者'">周边邻居有感染者</el-checkbox>
            <el-checkbox :label="'不详'">不详</el-checkbox>
          </el-checkbox-group>
        </div>
         <transition name="slide-fade">
        <div v-show="rules.infection" class="errorMessage" style="line-height: 38px;" >请选择选项</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.number}" id='number'>
        <div class="form_label"><span class="required">* </span>13. 如有家属感染，感染人数</div>
        <div class="form_qinsert">若咨客不愿透露，写不详</div>
        <div class="ui-input-text" >
          <input type="text" v-model="form.number" @input="handleChange(form.number, 'number')">
        </div>
         <transition name="slide-fade">
        <div v-show="rules.number" class="errorMessage" style="line-height: 38px;" >请输入内容</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.isWorry}" id='isWorry'>
        <div class="form_label"><span class="required">* </span>14. 是否担心自己会被感染</div>
        <div class="ui-input-text radio" >
           <el-radio-group v-model="form.isWorry" @change="value=>handleRadio(value,'isWorry')">
            <el-radio :label="'非常担心'" >非常担心</el-radio>
            <el-radio :label="'担心'" >担心</el-radio>
            <el-radio :label="'不担心'" >不担心</el-radio>
          </el-radio-group>
        </div>
         <transition name="slide-fade">
        <div v-show="rules.isWorry" class="errorMessage" style="line-height: 38px;" >请选择选项</div>
         </transition>
    </div>
     <div :class="{form_content:true, errorBox:rules.status}" id= 'status'>
        <div class="form_label"><span class="required">* </span>15. 咨客状态</div>
        <div class="ui-input-text radio" >
           <el-radio-group v-model="form.status" @change="value=>handleRadio(value,'status')">
            <el-radio :label="'住院隔离病房'" >住院隔离病房</el-radio>
            <el-radio :label="'住院一般病房'" >住院一般病房</el-radio>
            <el-radio :label="'隔离区医学观察'" >隔离区医学观察</el-radio>
            <el-radio :label="'居家独住'" >居家独住</el-radio>
            <el-radio :label="'居家与家人合住'" >居家与家人合住</el-radio>
            <el-radio :label="'宿舍或单位公寓'" >宿舍或单位公寓</el-radio>
            <el-radio :label="'出差或旅游'" >出差或旅游</el-radio>
          </el-radio-group>
        </div>
         <transition name="slide-fade">
        <div v-show="rules.status" class="errorMessage" style="line-height: 38px;" >请选择选项</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.isCrisis}" id= 'isCrisis'>
        <div class="form_label"><span class="required">* </span>16. 咨客是否处于危机</div>
        <div class="ui-input-text radio" >
           <el-radio-group v-model="form.isCrisis" @change="value=>handleRadio(value,'isCrisis')">
            <el-radio :label="'是'" >是</el-radio>
            <el-radio :label="'否'" >否</el-radio>
            <el-radio :label="'不详'" >不详</el-radio>
          </el-radio-group>
        </div>
         <transition name="slide-fade">
        <div v-show="rules.isCrisis" class="errorMessage" style="line-height: 38px;" >请选择选项</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.crisisCondition}" id ='crisisCondition' >
        <div class="form_label">17.（选填）如处于危机，具体情况</div>
        <div class="ui-input-text radio" >
           <el-radio-group v-model="form.crisisCondition">
            <el-radio :label="'有明确的自杀计划，近期（3天）不会实施'" >有明确的自杀计划，近期（3天）不会实施</el-radio>
            <el-radio :label="'即将实施自杀计划'" >即将实施自杀计划</el-radio>
            <el-radio :label="'刚刚实施自杀行为'" >刚刚实施自杀行为</el-radio>
            <el-radio :label="'遭遇突发事件，有生命危险'" >遭遇突发事件，有生命危险</el-radio>
            <el-radio :label="'有自杀意念，自杀倾向'" >有自杀意念，自杀倾向</el-radio>
            <el-radio :label="'其他'" >
              <span>
                其他
              </span>
              <div>
              <input type="text" v-model="crisisCondition" class="checkInput">
              </div>
            </el-radio>
          </el-radio-group>
        </div>
    </div>
    <div :class="{form_content:true, errorBox:rules.times}" id='times'>
        <div class="form_label"><span class="required">* </span>18. 咨询次数</div>
        <div class="ui-input-text radio" >
           <el-radio-group v-model="form.times" @change="value=>handleRadio(value,'times')">
            <el-radio :label="'首次'" >首次</el-radio>
            <el-radio :label="'5次内'" >5次内</el-radio>
            <el-radio :label="'5次以上'" >5次以上</el-radio>
            <el-radio :label="'不详'" >不详</el-radio>
          </el-radio-group>
        </div>
         <transition name="slide-fade">
        <div v-show="rules.times" class="errorMessage" style="line-height: 38px;" >请选择选项</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.isBusy}" id='isBusy'>
        <div class="form_label"><span class="required">* </span>19. 接听该咨询时是否占线</div>
        <div class="ui-input-text radio" >
           <el-radio-group v-model="form.isBusy" @change="value=>handleRadio(value,'isBusy')">
            <el-radio :label="'是（忙线时来电数）'" >
              <span>
                是（忙线时来电数）
              </span>
              <div>
              <span class="requiredInput">*</span><input type="text" v-model="isBusy"
              @input="radioIpt('isBusy')" class="checkInput2">
              </div>
            </el-radio>
            <el-radio :label="'否'" >否</el-radio>
          </el-radio-group>
        </div>
        <transition name="slide-fade">
        <div v-show="rules.isBusy===2"  class="errorMessage" style="line-height: 38px;" >请选择选项</div>
         </transition>
         <transition name="slide-fade">
        <div v-show="rules.isBusy===1"  class="errorMessage" style="line-height: 38px;" >文本框内容必须填写！</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.mainProblems}" id='mainProblems'>
        <div class="form_label"><span class="required">* </span>20. 咨客的主要问题<span class="qtypetip">&nbsp;【多选题】</span></div>
        <div class="ui-input-text checkBox" >
          <el-checkbox-group v-model="form.mainProblems" @change="value=>handleCheck(value,'mainProblems')">
            <el-checkbox :label="'疫情期间的现实问题解决（买药、出行、诊断、就医、食品口罩等的供应）'">疫情期间的现实问题解决（买药、出行、诊断、就医、食品口罩等的供应）</el-checkbox>
            <el-checkbox :label="'看到疫情报道和周围环境人们的过度警觉而引发的恐惧、焦虑、失眠'">看到疫情报道和周围环境人们的过度警觉而引发的恐惧、焦虑、失眠</el-checkbox>
            <el-checkbox :label="'恐慌被传染、有心慌、胸闷等不带肺炎疑似症状的躯体化反应'">恐慌被传染、有心慌、胸闷等不带肺炎疑似症状的躯体化反应</el-checkbox>
            <el-checkbox :label="'因疫情导致原本有心理、精神问题发作或加重'">因疫情导致原本有心理、精神问题发作或加重</el-checkbox>
            <el-checkbox :label="'有肺炎疑似症状，担心自己感染'">有肺炎疑似症状，担心自己感染</el-checkbox>
            <el-checkbox :label="'其他'">
              <span>
                其他
              </span>
              <div>
              <span class="requiredInput2">*</span><input type="text" v-model="mainProblems" @input="checkIpt(mainProblems ,'mainProblems')" class="checkInput3">
              </div>
            </el-checkbox>
          </el-checkbox-group>
        </div>
        <transition name="slide-fade">
        <div v-show="rules.mainProblems===2"  class="errorMessage" style="line-height: 38px;" >请选择选项</div>
         </transition>
         <transition name="slide-fade">
        <div v-show="rules.mainProblems===1"  class="errorMessage" style="line-height: 38px;" >文本框内容必须填写！</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.jobContent}" id='jobContent'>
        <div class="form_label"><span class="required">* </span>21. 咨询员主要工作内容与方法</div>
        <div class="ui-input-text" >
          <input type="text" v-model="form.jobContent" @input="handleChange(form.jobContent, 'jobContent')">
        </div>
         <transition name="slide-fade">
        <div v-show="rules.jobContent" class="errorMessage" style="line-height: 38px;" >请输入内容</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.suggest}" id='suggest'>
        <div class="form_label"><span class="required">* </span>22. 咨询员主要干预建议</div>
        <div class="ui-input-text" >
          <input type="text" v-model="form.suggest" @input="handleChange(form.suggest, 'suggest')">
        </div>
         <transition name="slide-fade">
        <div v-show="rules.suggest" class="errorMessage" style="line-height: 38px;" >请输入内容</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.result}" id='result'>
        <div class="form_label"><span class="required">* </span>23. 咨询结果</div>
        <div class="ui-input-text radio" >
           <el-radio-group v-model="form.result" @change="value=>handleRadio(value,'result')">
            <el-radio :label="1" >问题解决</el-radio>
            <el-radio :label="2" >转介</el-radio>
            <el-radio :label="3" >就来话问题与其他部门联系</el-radio>
          </el-radio-group>
        </div>
         <transition name="slide-fade">
        <div v-show="rules.result" class="errorMessage" style="line-height: 38px;" >请选择选项</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.feel}" id='feel'>
        <div class="form_label"><span class="required">* </span>24. 咨询员在接听这位咨客电话的感受</div>
        <div class="ui-input-text" >
          <input type="text" v-model="form.feel" @input="handleChange(form.feel, 'feel')">
        </div>
         <transition name="slide-fade">
        <div v-show="rules.feel" class="errorMessage" style="line-height: 38px;" >请输入内容</div>
         </transition>
    </div>
    <div :class="{form_content:true, errorBox:rules.consultant}" id='consultant'>
        <div class="form_label"><span class="required">* </span>25. 咨询员姓名</div>
        <div class="ui-input-text" >
          <input type="text" v-model="form.consultant" @input="handleChange(form.consultant, 'consultant')">
        </div>
        <transition name="slide-fade">
          <div v-show="rules.consultant" class="errorMessage" style="line-height: 38px;" >请输入内容</div>
        </transition>
    </div>
    <div class="btn_box">
      <!-- <el-button type="primary" :href="hrefKey" :disabled="loading" style="width:100%;" @click="submit">提交</el-button> -->
      <a class="btn" v-loading="loading" :href="hrefKey" @click="submit" :style="{'pointer-events':disabled}">提交</a>
    </div>
    <div class="box">
    </div>
    <div class="modal" v-show="alert">
      <div class="modalMsg">
        <span>提示:</span>
        <p>{{ alertMsg }}</p>
        <button class="ok" @click="alert = false">确定</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      form: {
        date: '',
        name: '',
        gender: '',
        age: '',
        maritalStatus: '',
        education: '',
        classify: '',
        address: '',
        purposeClassify: [],
        symptomClassify: [],
        physicalCondition: '',
        infection: [],
        number: '', // 13. 如有家属感染，感染人数
        isWorry: '', // 14. 是否担心自己会被感染
        status: '', // 15.咨客状态
        isCrisis: '', // 16咨客是否处于危机
        crisisCondition: '', // 17.(选填)如处于危机，具体情况
        times: '', // 18.咨询次数
        isBusy: '', // 19.接听该咨询时是否占线
        mainProblems: [], // 20.咨客的主要问题
        jobContent: '', // 21.咨询员主要工作内容与方法
        suggest: '', // 22.咨询员主要干预建议
        result: '', // 23.咨询结果
        feel: '', // 24.咨询员在接听这位咨客电话的感受
        consultant: ''// 25.咨询员姓名
      },
      rules: {
        date: 0,
        name: 0,
        gender: 0,
        age: 0,
        maritalStatus: 0,
        education: 0,
        classify: 0,
        address: 0, // 0已选择，1已选择未填空，2，未选择
        purposeClassify: 0,
        symptomClassify: 0,
        physicalCondition: 0,
        infection: 0,
        number: 0, // 13. 如有家属感染，感染人数
        isWorry: 0, // 14. 是否担心自己会被感染
        status: 0, // 15.咨客状态
        isCrisis: 0, // 16咨客是否处于危机
        crisisCondition: 0, // 17.(选填)如处于危机，具体情况
        times: 0, // 18.咨询次数
        isBusy: 0, // 19.接听该咨询时是否占线
        mainProblems: 0, // 20.咨客的主要问题
        jobContent: 0, // 21.咨询员主要工作内容与方法
        suggest: 0, // 22.咨询员主要干预建议
        result: 0, // 23.咨询结果
        feel: 0, // 24.咨询员在接听这位咨客电话的感受
        consultant: 0// 25.咨询员姓名
      },
      classify: '',
      address: {
        '2': '',
        '3': '',
        '4': ''
      },
      purposeClassify: '',
      symptomClassify: '',
      physicalCondition: '',
      crisisCondition: '',
      isBusy: '',
      mainProblems: '',
      hrefKey: '#',
      alertMsg: '',
      alert: false,
      loading: false,
      disabled: 'auto'
    }
  },
  created () {
    this.form.date = moment().format('YYYY-MM-DD HH:mm')
  },
  methods: {
    // 输入框输入事件
    handleChange (value, key) {
      if (value) {
        this.rules[key] = 0
      } else {
        this.rules[key] = 2
      }
    },
    // 单选框改变事件
    handleRadio  (value, key) {
      if (value) {
        if (key === 'address') {
          if (value === '湖北省、武汉市外的其他市') {
            if (this.address[2]) {
              this.rules[key] = 0
            } else {
              this.rules[key] = 1
            }
          } else if (value === '湖北省外其他省市') {
            if (this.address[3]) {
              this.rules[key] = 0
            } else {
              this.rules[key] = 1
            }
          } else if (value === '国外或海外') {
            if (this.address[4]) {
              this.rules[key] = 0
            } else {
              this.rules[key] = 1
            }
          } else {
            this.rules[key] = 0
          }
        } else if (key === 'isBusy') {
          if (value === '是（忙线时来电数）') {
            if (this.isBusy) {
              this.rules[key] = 0
            } else {
              this.rules[key] = 1
            }
          } else {
            this.rules[key] = 0
          }
        } else {
          this.rules[key] = 0
        }
      } else {
        this.rules[key] = 2
      }
    },
    radioIpt (value) {
      if (value === 2) {
        this.address[3] = ''
        this.address[4] = ''
        this.rules.address = 0
      } else if (value === 3) {
        this.address[2] = ''
        this.address[4] = ''
        this.rules.address = 0
      } else if (value === 4) {
        this.address[2] = ''
        this.address[3] = ''
        this.rules.address = 0
      } else if (value === 'isBusy') {
        if (this.form.isBusy) {
          this.rules.isBusy = 0
        } else {
          this.rules.isBusy = 2
        }
      }
    },
    checkIpt (value, key) {
      if (key === 'purposeClassify') {
        if (value) {
          this.rules.purposeClassify = 0
        } else {
          this.rules.purposeClassify = 1
        }
      } else if (key === 'symptomClassify') {
        if (value) {
          this.rules.symptomClassify = 0
        } else {
          this.rules.symptomClassify = 1
        }
      } else if (key === 'mainProblems') {
        if (value) {
          this.rules.mainProblems = 0
        } else {
          this.rules.mainProblems = 1
        }
      }
    },
    handleCheck (value, key) {
      if (key === 'purposeClassify') {
        if (value.length > 0 && value.indexOf('其他') === -1) {
          this.rules.purposeClassify = 0
        } else if (value.length > 0 && value.indexOf('其他') !== -1) {
          if (this.purposeClassify) {
            this.rules.purposeClassify = 0
          } else {
            this.rules.purposeClassify = 1
          }
        } else if (value.length === 0) {
          this.rules.purposeClassify = 2
        }
      } else if (key === 'symptomClassify') {
        if (value.length > 0 && value.indexOf('其他') === -1) {
          this.rules.symptomClassify = 0
        } else if (value.length > 0 && value.indexOf('其他') !== -1) {
          if (this.symptomClassify) {
            this.rules.symptomClassify = 0
          } else {
            this.rules.symptomClassify = 1
          }
        } else if (value.length === 0) {
          this.rules.symptomClassify = 2
        }
      } else if (key === 'infection') {
        if (value.length > 0) {
          this.rules.infection = 0
        } else {
          this.rules.infection = 2
        }
      } else if (key === 'mainProblems') {
        if (value.length > 0 && value.indexOf('其他') === -1) {
          this.rules.mainProblems = 0
        } else if (value.length > 0 && value.indexOf('其他') !== -1) {
          if (this.mainProblems) {
            this.rules.mainProblems = 0
          } else {
            this.rules.mainProblems = 1
          }
        } else if (value.length === 0) {
          this.rules.mainProblems = 2
        }
      }
    },
    formatRadio () {
      if (this.form.classify === '医务人员（医、护、技、后勤）') {
        if (this.classify) {
          return this.classify
        } else {
          return this.form.classify
        }
      } else {
        return this.form.classify
      }
    },
    formatRadio2 () {
      if (this.form.physicalCondition === '其他') {
        if (this.physicalCondition) {
          return this.physicalCondition
        } else {
          return this.form.physicalCondition
        }
      } else {
        return this.form.physicalCondition
      }
    },
    formatRadio3 () {
      if (this.form.crisisCondition === '其他') {
        if (this.crisisCondition) {
          return this.crisisCondition
        } else {
          return this.form.crisisCondition
        }
      } else {
        return this.form.crisisCondition
      }
    },
    address8 () {
      if (this.form.address === '湖北省、武汉市外的其他市') {
        return this.address[2]
      } else if (this.form.address === '湖北省外其他省市') {
        return this.address[3]
      } else if (this.form.address === '国外或海外') {
        return this.address[4]
      } else {
        return this.form.address
      }
    },
    formatCheck () {
      if (this.form.purposeClassify.indexOf('其他') === -1) {
        return this.form.purposeClassify
      } else {
        let index = this.form.purposeClassify.indexOf('其他')
        this.form.purposeClassify[index] = this.purposeClassify
        return this.form.purposeClassify
      }
    },
    formatCheck2 () {
      if (this.form.symptomClassify.indexOf('其他') === -1) {
        return this.form.symptomClassify
      } else {
        let index = this.form.symptomClassify.indexOf('其他')
        this.form.symptomClassify[index] = this.symptomClassify
        return this.form.symptomClassify
      }
    },
    formatCheck3 () {
      if (this.form.mainProblems.indexOf('其他') === -1) {
        return this.form.mainProblems
      } else {
        let index = this.form.mainProblems.indexOf('其他')
        this.form.mainProblems[index] = this.mainProblems
        return this.form.mainProblems
      }
    },
    submit () {
      if (this.form.date) {
        this.rules.date = 0
      } else {
        this.rules.date = 2
      }
      //
      if (this.form.name) {
        this.rules.name = 0
      } else {
        this.rules.name = 2
      }
      //
      if (this.form.gender) {
        this.rules.gender = 0
      } else {
        this.rules.gender = 2
      }
      //
      if (this.form.age) {
        this.rules.age = 0
      } else {
        this.rules.age = 2
      }
      //
      if (this.form.maritalStatus) {
        this.rules.maritalStatus = 0
      } else {
        this.rules.maritalStatus = 2
      }
      //
      if (this.form.education) {
        this.rules.education = 0
      } else {
        this.rules.education = 2
      }
      //
      if (this.form.classify) {
        this.rules.classify = 0
      } else {
        this.rules.classify = 2
      }
      //
      if (this.form.address) {
        if (this.form.address === '湖北省、武汉市外的其他市') {
          if (this.address['2']) {
            this.rules.address = 0
          } else {
            this.rules.address = 1
          }
        } else if (this.form.address === '湖北省外其他省市') {
          if (this.address['3']) {
            this.rules.address = 0
          } else {
            this.rules.address = 1
          }
        } else if (this.form.address === '国外或海外') {
          if (this.address['4']) {
            this.rules.address = 0
          } else {
            this.rules.address = 1
          }
        } else {
          this.rules.address = 0
        }
      } else {
        this.rules.address = 2
      }
      //
      if (this.form.purposeClassify.length > 0) {
        if (this.form.purposeClassify.length > 0 && this.form.purposeClassify.indexOf('其他') === -1) {
          this.rules.purposeClassify = 0
        } else if (this.form.purposeClassify.length > 0 && this.form.purposeClassify.indexOf('其他') !== -1) {
          if (this.purposeClassify) {
            this.rules.purposeClassify = 0
          } else {
            this.rules.purposeClassify = 1
          }
        }
      } else {
        this.rules.purposeClassify = 2
      }
      //
      if (this.form.symptomClassify.length > 0) {
        if (this.form.symptomClassify.length > 0 && this.form.symptomClassify.indexOf('其他') === -1) {
          this.rules.symptomClassify = 0
        } else if (this.form.symptomClassify.length > 0 && this.form.symptomClassify.indexOf('其他') !== -1) {
          if (this.symptomClassify) {
            this.rules.symptomClassify = 0
          } else {
            this.rules.symptomClassify = 1
          }
        }
      } else {
        this.rules.symptomClassify = 2
      }
      //
      if (this.form.physicalCondition) {
        this.rules.physicalCondition = 0
      } else {
        this.rules.physicalCondition = 2
      }
      //
      if (this.form.infection.length > 0) {
        this.rules.infection = 0
      } else {
        this.rules.infection = 2
      }
      //
      if (this.form.number) {
        this.rules.number = 0
      } else {
        this.rules.number = 2
      }
      //
      if (this.form.isWorry) {
        this.rules.isWorry = 0
      } else {
        this.rules.isWorry = 2
      }
      //
      if (this.form.status) {
        this.rules.status = 0
      } else {
        this.rules.status = 2
      }
      //
      if (this.form.isCrisis) {
        this.rules.isCrisis = 0
      } else {
        this.rules.isCrisis = 2
      }
      //
      if (this.form.times) {
        this.rules.times = 0
      } else {
        this.rules.times = 2
      }
      //
      if (this.form.isBusy) {
        if (this.form.isBusy === '是（忙线时来电数）') {
          if (this.isBusy) {
            this.rules.isBusy = 0
          } else {
            this.rules.isBusy = 1
          }
        } else {
          this.rules.isBusy = 0
        }
      } else {
        this.rules.isBusy = 2
      }
      //
      if (this.form.mainProblems.length > 0) {
        if (this.form.mainProblems.length > 0 && this.form.mainProblems.indexOf('其他') === -1) {
          this.rules.mainProblems = 0
        } else if (this.form.mainProblems.length > 0 && this.form.mainProblems.indexOf('其他') !== -1) {
          if (this.mainProblems) {
            this.rules.mainProblems = 0
          } else {
            this.rules.mainProblems = 1
          }
        }
      } else {
        this.rules.mainProblems = 2
      }
      //
      if (this.form.jobContent) {
        this.rules.jobContent = 0
      } else {
        this.rules.jobContent = 2
      }
      //
      if (this.form.suggest) {
        this.rules.suggest = 0
      } else {
        this.rules.suggest = 2
      }
      //
      if (this.form.result) {
        this.rules.result = 0
      } else {
        this.rules.result = 2
      }
      //
      if (this.form.feel) {
        this.rules.feel = 0
      } else {
        this.rules.feel = 2
      }
      if (this.form.consultant) {
        this.rules.consultant = 0
      } else {
        this.rules.consultant = 2
      }
      for (let key in this.rules) {
        if (this.rules[key] !== 0) {
          this.hrefKey = '#' + key
          break
        } else {
          this.hrefKey = 'javascript:void(0);'
        }
      }
      let arr = []
      for (let key in this.rules) {
        if (this.rules[key] === 0) {
          arr.push(true)
        } else {
          arr.push(false)
        }
      }
      var isTrue = arr.every(item => {
        return item === true
      })
      if (isTrue) {
        this.disabled = 'none'
        this.loading = true
        this.$axios.post(
          '/psychosiapeople.psychologicalHandler',
          {
            interface_type: 'insertOutbreak',
            'userid': this.$route.query.userid,
            'data': [
              {
                'qid': 1,
                'title': '咨询日期',
                'answer': this.form.date
              },
              {
                'qid': 2,
                'title': '咨客姓名',
                'answer': this.form.name
              },
              {
                'qid': 3,
                'title': '咨客性别',
                'answer': this.form.gender
              },
              {
                'qid': 4,
                'title': '咨客年龄',
                'answer': this.form.age
              },
              {
                'qid': 5,
                'title': '咨客婚姻情况',
                'answer': this.form.maritalStatus
              },
              {
                'qid': 6,
                'title': '咨客文化程度',
                'answer': this.form.education
              },
              {
                'qid': 7,
                'title': '咨客分类',
                'answer': this.formatRadio()
              },
              {
                'qid': 8,
                'title': '目前人在哪里',
                'answer': this.address8()
              },
              {
                'qid': 9,
                'title': '来电目的分类',
                'answer': this.formatCheck()
              },
              {
                'qid': 10,
                'title': '咨客症状分类',
                'answer': this.formatCheck2()
              },
              {
                'qid': 11,
                'title': '咨客身体情况',
                'answer': this.formatRadio2()
              },
              {
                'qid': 12,
                'title': '咨客周边感染新型冠状病毒情况',
                'answer': this.form.infection
              },
              {
                'qid': 13,
                'title': '若咨客不愿透露，写不详',
                'answer': this.form.number
              },
              {
                'qid': 14,
                'title': '若咨客不愿透露，写不详',
                'answer': this.form.isWorry
              },
              {
                'qid': 15,
                'title': '咨客状态',
                'answer': this.form.status
              },
              {
                'qid': 16,
                'title': '咨客是否处于危机',
                'answer': this.form.isCrisis
              },
              {
                'qid': 17,
                'title': '（选填）如处于危机，具体情况',
                'answer': this.formatRadio3()
              },
              {
                'qid': 18,
                'title': '咨询次数',
                'answer': this.form.times
              },
              {
                'qid': 19,
                'title': '接听该咨询时是否占线',
                'answer': this.form.isBusy === '是（忙线时来电数）' ? this.isBusy : this.form.isBusy
              },
              {
                'qid': 20,
                'title': '咨客的主要问题',
                'answer': this.formatCheck3()
              },
              {
                'qid': 21,
                'title': '咨询员主要工作内容与方法',
                'answer': this.form.jobContent
              },
              {
                'qid': 22,
                'title': '咨询员主要干预建议',
                'answer': this.form.suggest
              },
              {
                'qid': 23,
                'title': '咨询结果',
                'answer': this.form.result
              },
              {
                'qid': 24,
                'title': '咨询员在接听这位咨客电话的感受',
                'answer': this.form.feel
              },
              {
                'qid': 25,
                'title': '咨询员姓名',
                'answer': this.form.consultant
              }
            ]
          },
          {
            headers: {
              token: this.$route.query.token,
              loginCode: this.$route.query.loginCode
            }
          }
        ).then(res => {
          this.disabled = 'auto'
          this.loading = false
          if (res.data.success) {
            this.$router.push({
              path: '/registration-form-success',
              query: {
                token: this.$route.query.token,
                loginCode: this.$route.query.loginCode,
                userid: this.$route.query.userid
              }
            })
          } else {
            this.alert = true
            this.alertMsg = res.data.rspmsg
          }
        }).catch(() => {
          this.disabled = 'auto'
          this.loading = false
          this.alert = true
          this.alertMsg = 'error'
        })
      }
    }
  }
}
</script>

<style scope>
.reg_form{
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
.form{
  padding: 26px 10px 12px;
}
.form_title{
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    text-align: center;
    color: #1ea0fa;
}
.form_content{
  box-sizing: content-box;
  margin: 10px 8px;
  padding: 15px 12px;
  border: 1px dashed transparent;
}
.form_content .required{
  color: red;
}
.form_label{
  font-size: 16px !important;
  font-weight: bold;
  padding: 0 0 8px 0 !important;
}
.form_qinsert{
  color: #666666;
  line-height: 18px;
  margin-bottom: 8px;
  font-size: 14px;
  margin-left: 8px;
}
.date-picker{
  margin: 8px 8px;
}
.ui-input-text{
  border: 1px solid #e0e0e0;
  margin: 8px 8px;
  background-color: #fff;
  padding: 0;
  border-radius: 4px;
}
.ui-input-text>input{
  /* margin-left: 8px; */
  background-color: #fff;
  border: none !important;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  display: block;
  width: 92%;
  outline: none;
}
.errorBox{
  border: 1px dashed rgb(222, 103, 82);
  transition: all 0.5s;
}
.errorMessage{
  padding-left: 12px;
  color: Red;
  line-height: 38px;
  background-color: #ffe5e0;
  border-radius: 4px;
  font-size: 12px;
  margin: 8px 8px 0px;
}
.radio .el-radio-group{
  width: 100%;
}
.radio .el-radio{
  display: block !important;
  font-size: 16px !important;
  padding: 14px 10px 10px 10px !important;
  margin: 0px !important;
  border-bottom: 1px solid #e0e0e0!important;
}
.radio .el-radio-group .el-radio:last-child{
  border-bottom: 0px solid transparent !important;
}
.checkInput{
  margin: 8px 5px 3px 30px;
  outline: none;
  border-radius: 2px;
  padding: 8px 5px;
  font-size: 14px;
  width: 80%;
  background-color: #fff;
  border: 1px solid #e0e0e0 !important;
}
.checkInput2{
  margin: 8px 5px 3px 5px;
  outline: none;
  border-radius: 2px;
  padding: 8px 5px;
  font-size: 14px;
  width: 80%;
  background-color: #fff;
  border: 1px solid #e0e0e0 !important;
}
.checkInput3{
  margin: 8px 5px 3px 5px;
  outline: none;
  border-radius: 2px;
  padding: 8px 5px;
  font-size: 14px;
  width: 80%;
  background-color: #fff;
  border: 1px solid #e0e0e0 !important;
}
.requiredInput{
  margin-left: 16px;
  color: red;
}
.requiredInput2{
  margin-left: -10px;
  color: red;
}
.qtypetip{
  font-weight: normal;
  color: #999;
}
.checkBox .el-checkbox-group{
  width: 100%;
}
.checkBox .el-checkbox{
  display: block !important;
  width: 100%;
  font-size: 16px !important;
  padding: 14px 0 10px 0px !important;
  border-bottom: 1px solid #e0e0e0 ;
}
.checkBox .el-checkbox-group .el-checkbox:last-child{
  border-bottom: 0px solid transparent !important;
}
.checkBox .el-checkbox .el-checkbox__input{
  margin-left: 10px;
  vertical-align: top;
}
.el-checkbox, .el-checkbox__label {
  width: 84%;
  vertical-align: top;
  white-space: normal;
 }
 .el-checkbox__label div{
   white-space: nowrap;
 }
 .btn_box{
   width: 100%;
   /* padding: 12px 20px 13px; */
   position: fixed ;
   left: 0;
   bottom: 20px;
   box-sizing: border-box;
   padding: 0 12px;
   z-index: 999;
 }
 .btn{
   background-color:#1ea0fa;
   color:#F7F7F7;
   font-size: 20px;
   padding: 9px 0px 9px;
   border-radius: 8px;
   width: 88%;
   display: block;
    margin: 0 auto;
    outline: none;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    box-sizing: border-box;
 }
 .box{
   height: 72px;
 }
 .noBorder{
   border-bottom: none
 }
</style>
<style >
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .4s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.modal {
  font-size: 16px;
  font-weight: bold;
  height: 100%;
  display: block;
  min-height: 900px;
  background-color: rgba(224, 224, 224, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  margin: auto;
  width: 100%;
  overflow: hidden;
  letter-spacing: 1px;
}
.modalMsg {
  /* height: 100px; */
  font-weight: normal;
  background: #fff;
  position: absolute;
  width: 290px;
  right: 0;
  left: 0;
  top: 250px;
  margin: auto;
  padding: 20px;
  border-radius: 7px;
}
.ok {
  margin-top: 8px;
  float: right;
  width: 70px;
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  background: #1ea0fa;
  border-radius: 5px;
  border: unset;
  color: #fff;
  letter-spacing: 1px;
}
</style>
