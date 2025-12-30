import React from 'react'

export const Addtodo = () => {
  return (
    <div className="container my-3">
        <h3>Add a Todo</h3>
      <form>
  <div class="mb-3">
    <label for="title" class="form-label">todo title</label>
    <input type="text" class="form-control" id="title" aria-describedby="emailHelp"/>
   </div>
  <div class="mb-3">
    <label for="desc" class="form-label">todo description</label>
    <input type="text" class="form-control" id="desc"/>
  </div>
  
  <button type="submit" class="btn btn-success">Add Todo</button>
</form>
</div>
  )
}
export default Addtodo