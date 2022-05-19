import React from 'react'

const Layouts = ({title, count}) => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: 200,
    }}>
        <div style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column"
        }}>
            <p style={{
                color: "green",
                alignSelf: "center"
            }}>{title}</p>
            <p>{count}</p>
        </div>
    </div>
  )
}

export default Layouts