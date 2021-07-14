import Main from "../components/Main";
import * as actions from '../actions';
import { connect } from 'react-redux';

//store안의 값을 props로 연결
const mapStateToProps = (state) => ({

});

//액션생성 함수 사용하여 액션 생성, 해당 액션을 dispatch하는 함수 만든 후 이를 props에 연결
const mapDispatchToProps = (dispatch) => ({

});

//Main의 컴포넌트를 앱의 데이터 레이어와 묶는 역할
const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default MainContainer;