import { connect } from 'react-redux';
import StatusModal from './StatusModal';
import { getAll, updateTableStatus } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateTableStatus: (id, status) => dispatch(updateTableStatus({
    id: id,
    status: status,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusModal);