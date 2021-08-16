<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="field">
        <label class="label">Feedback Category:</label>
        <div class="control">
          <div class="select">
            <select>
              <option default selected disabled>Select Category</option>
              <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Customer Comments</label>
        <div class="control">
          <textarea class="textarea" placeholder="Enter Customer Comments OR commentary - IF POSSIBLE PLEASE TRANSLATE"></textarea>
        </div>
      </div>
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: ['Cancellation', 'Customer Service', 'Delivery', 'Product', 'Returns', 'Other']
    }
  }
}
</script>

<style>

</style>
