<template>
  <div class="request">
    <table class="table">
      <thead>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>性别</th>
          <th>手机号</th>
          <th>出生日期</th>
          <th>编辑</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in studentsList" :key="index">
          <td>{{ item.stuNo }}</td>
          <td>{{ item.stuName }}</td>
          <td>{{ item.stuGender ? "女" : "男" }}</td>
          <td>{{ item.stuPhone }}</td>
          <td>{{ item.stuBirthday }}</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              @click="getStudentDetail(item.id)"
            >
              详情
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// 引入API
import { API } from "@/request/api";
export default {
  data() {
    return {
      studentsList: [],
    };
  },
  created() {
    this.getStudentsInfo();
  },
  methods: {
    // 获取列表
    async getStudentsInfo() {
      const result = await API.getStudentsInfo();
      this.studentsList = result;
    },
    // 获取详情
    async getStudentDetail(id) {
      const result = await API.getStudentDetail(id);
      alert(JSON.stringify(result))
    },
  },
};
</script>

<style></style>
