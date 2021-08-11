<template>
  <div>
    <div class="table-container">
      <table class="table is-fullwidth has-text-centered is-hoverable">
        <thead>
          <tr>
            <th>Marketplace</th>
            <th>Feedback Date</th>
            <th>Category</th>
            <th>Order ID</th>
            <th>Comments</th>
            <th>Carrier</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="feedback in Feedbacks" :key="feedback.order_id">
            <td>{{ feedback.marketplace }}</td>
            <td>{{ feedback.date_added }}</td>
            <td>{{ feedback.Category }}</td>
            <td><a href="http://dashboard.unitexcp.com/ui/{feedback.order_id}" target="_blank">{{ feedback.order_id }}</a></td>
            <td>{{ feedback.comments }}</td>
            <td>{{ feedback.courier_service }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackList',
  props: {
    Feedbacks: {
      type: Object
    }
  }
}
</script>

<style>

</style>
