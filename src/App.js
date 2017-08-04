import React, {Component} from 'react';
import Matrix from './matrix';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matrixs: [{
        rows: [
          [{}, {}, {}, {}],
          [{}, {}, {}, {}],
          [{}, {}, {}, {}],
          [{}, {}, {}, {}]
        ]
      }]
    };
  }

  onAddRows = (index) => {
    const newMatrixs = this.state.matrixs.map((matrix, idx) => {

      if (idx === index) {
        return {
          rows: [...matrix.rows, matrix.rows[0]]
        }
      }
      return matrix;
    });

    this.setState({
      matrixs: newMatrixs
    });
  };

  onAddColumns = (index) => {
    const newMatrixs = this.state.matrixs.map((matrix, idx) => {

      if (idx === index) {
        return {
          rows: matrix.rows.map(td => [...td, {}])
        };
      }
      return matrix;
    });

    this.setState({
      matrixs: newMatrixs
    });
  };

  onRemoveRows = (matrixId, rowId) => {
    console.log(rowId);
  };

  onRemoveColumns = (matrixId, TdId) => {
    console.log(TdId);
  };

  render() {
    const {matrixs} = this.state;

    return (
      <div>
        {matrixs.map((matrix, idx) =>
          <Matrix onAddRows={() => this.onAddRows(idx)}
                  onAddColumns={() => this.onAddColumns(idx)}
                  onRemoveColumns={(columnId) => this.onRemoveColumns(idx, columnId)}
                  onRemoveRows={(rowId) => this.onRemoveRows(idx, rowId)}
                  matrix={matrix}
                  key={idx}/>
        )}
      </div>
    );
  };
}

export default App;
