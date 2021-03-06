import React,{Component} from 'react';
import ToDoList from './toDo/ToDoList';
import NewToDo from './toDo/NewToDo';
import '../stylesheets/dashboard.css';
import CalendarView from './toDo/CalendarView';
import MdFormatListBulleted from 'react-icons/lib/md/format-list-bulleted';
import TiCalendarOutline from 'react-icons/lib/ti/calendar-outline';
import RadioButton from './tools/RadioButton';
import { getCurrentUser } from '../actions/auth';
import { connect } from 'react-redux';
class Dashboard extends Component {
  constructor(props){
    super(props);
    this._handleChangeView=this._handleChangeView.bind(this);
    this.renderBasedOnView=this.renderBasedOnView.bind(this);
  }

  state={
    view:'list',
  }

  componentDidMount() {
    try{
      if (!this.props.authenticated) {
        this.props.getCurrentUser()
          .catch((error) => {
            this.props.history.push('/login');
          });
      }
    }catch(error){
      this.props.history.push('/login');
    }
  }

  renderBasedOnView(){
    switch (this.state.view) {
      case 'list':
         return  <ToDoList key='todolist'/>;
      case 'calendar':
        return <CalendarView key='calendar'/>
      default:
        return <ToDoList key='todolist' />;
    }
  }

  _handleChangeView(value){
    this.setState({
      view:value
    })
  }
  render() {
    const { authenticated } = this.props;
    return authenticated && <div className="container dashboard">
        <div className="row">
          <RadioButton
          buttons={[
            {
              id:'list',
              label:'List View',
              icon:<MdFormatListBulleted/>,
              checked:true
            },
            {
              id:'calendar',
              label:'Calendar View',
              icon:<TiCalendarOutline/>,
              checked:false
            }
          ]}
          onRadioChange={(id)=>{this._handleChangeView(id)}}
          />
        </div>
        <div className="row">
          <NewToDo key="newtodo" />
        </div>
        {this.renderBasedOnView()}
      </div>;
  }
}
function mapStateToProps(state) {
  if (state.auth) {
    return { authenticated: state.auth.authenticated };
  }

  return { authenticated: false };

}
export default connect(mapStateToProps, { getCurrentUser })(Dashboard);