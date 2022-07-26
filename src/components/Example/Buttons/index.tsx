import React from "react"

// Components
import Button from "./Button"

const Buttons = () => (
  <>
    <div style={{ marginBottom: '13px' }}>
      <Button background="primary" border="primary" color="light">Get a FREE Quote</Button>
    </div>
    <div style={{ marginBottom: '13px' }}>
      <Button background="light" border="primary" color="primary">Find a local agent</Button>
    </div>
    <div style={{ marginBottom: '13px' }}>
      <Button background="accent" border="accent" color="light">Get a FREE Quote</Button>
    </div>
    <div style={{ marginBottom: '13px' }}>
      <Button background="light" border="accent" color="accent">Find a local agent</Button>
    </div>
  </>
)

export default Buttons