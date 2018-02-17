import React from 'react'
import Checkbox from 'material-ui/Checkbox'

const styles = {
  container: {
    display: 'flex',
    background: '#ddd',
  },
  checkbox: {
    transform: 'scale(0.8)',
    whiteSpace: 'nowrap',
  },
  showText: {
    fontSize: '10pt',
    padding: '5px 0 5px 15px',
    color: '#3d3d3d',
  },
}

export default ({ handleCheck, complete, notComplete }) => {
  return (
    <div style={styles.container}>
      <span style={styles.showText}> show: </span>
      <div style={styles.checkbox}>
        <Checkbox
          name="complete"
          label="complete"
          checked={complete}
          iconStyle={{ fill: '#3d3d3d' }}
          onCheck={e => handleCheck('complete', e.target.checked)}
        />
      </div>
      <div style={styles.checkbox}>
        <Checkbox
          name="notComplete"
          label="not complete"
          checked={notComplete}
          iconStyle={{ fill: '#3d3d3d' }}
          onCheck={e => handleCheck('notComplete', e.target.checked)}
        />
      </div>
    </div>
  )
}
