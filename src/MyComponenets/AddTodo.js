import React from "react";
import { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    addTodo(title, desc);
    setTitle("");
    setDesc("");
  };
  return (
    <div className="container my-6">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="form-group needs validation">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="todoTitle"
            placeholder="Enter Title"
            required
          />
        </div>
        <div className="form-group needs validation">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="todoDesc"
            placeholder="Enter Description"
            required
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success my-2">
          Add Todo
        </button>
      </form>
    </div>
  );
};
