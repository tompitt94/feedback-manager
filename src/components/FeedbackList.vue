<template>
  <div>
    <div class="table-container">
      <table class="table is-fullwidth has-text-centered">
        <thead>
          <tr>
            <th>Marketplace</th>
            <th>Feedback Date</th>
            <th>Order ID</th>
            <th>Comments</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Amazon UK</td>
            <td>14/06/2021</td>
            <td><a href="http://dashboard.unitexcp.com/ui/orders/UTAMZ_206-0143709-9901956" target="_blank">UTAMZ_206-0143709-9901956</a></td>
            <td>I have not received this item and would like a full refund immediately</td>
            <td>Delivery</td>
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
    FeedbackData: {
      type: Object
    }
  }
}
</script>

<style>

</style>
