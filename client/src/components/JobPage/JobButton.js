import { Button } from 'flowbite-react';
import { useState } from 'react';
import { updateJob } from '../../API';

function JobButton(props) {
  const [status, setStatus] = useState(props.status);
  const updateJobStatus = (value) => {
    updateJob(props.idJob, props.name, props.salary, props.level, props.typeOfTime, props.typeOfWork, props.tags, props.location, props.time, props.description, props.fromCompany, value);
  };
  return (
    <div className="flex flex-col">
      {status === 'Pending' && (
        <Button onClick={() => updateJobStatus('Ready')} className="m-4">
          Apply
        </Button>
      )}
      {status === 'Ready' && (
        <Button onClick={() => updateJobStatus('Pending')} color={'failure'} className="m-4">
          Cancel Apply
        </Button>
      )}
    </div>
  );
}

export default JobButton;
