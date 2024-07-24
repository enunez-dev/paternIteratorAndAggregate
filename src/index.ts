import { UsersPanel } from './UserPanel';
import { CreAggregate } from './CreAggregate';

var panel = new UsersPanel();
panel.addAggregate(new CreAggregate());

panel.show();
