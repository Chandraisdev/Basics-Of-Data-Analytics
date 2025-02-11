import React from "react";
import "./styles.css";

const DataSourcesInfo = () => {
  return (
    <div className="container">
      <h1 className="heading">Data Generation Sources and Analytics</h1>
      <div className="overview">
        <p>
          In the data revolution, data is generated through various activities in our daily lives. Here are three key sources of data generation and their potential uses in data analytics:
        </p>
      </div>
      <div className="data-source">
        <h2>1. GitHub Commits</h2>
        <p>
          GitHub commits generate data related to code changes, contributions, and project progress. This data can be analyzed to understand development trends, identify active contributors, and track project milestones. Teams can use this data to improve collaboration and project management.
        </p>
      </div>
      <div className="data-source">
        <h2>2. VSCode Usage</h2>
        <p>
          VSCode usage data includes information on code editing sessions, extensions used, and debugging activities. This data can be analyzed to understand developer workflows, identify popular extensions, and optimize development environments. Developers can use this data to enhance productivity and streamline their coding practices.
        </p>
      </div>
      <div className="data-source">
        <h2>3. Deployment Services</h2>
        <p>
          Deployment services generate data related to application deployments, server performance, and user interactions. This data can be analyzed to monitor application health, identify performance bottlenecks, and ensure smooth user experiences. DevOps teams can use this data to improve deployment strategies and enhance application reliability.
        </p>
      </div>
      <div className="data-source">
        <h2>4. Other Activities</h2>
        <p>
          Other activities such as browsing, debugging, code reviews, and model training generate data that can be analyzed to understand developer behaviors, identify areas for improvement, and optimize workflows. This data can be used to enhance productivity and streamline development processes.
        </p>
      </div>
    </div>
  );
};

export default DataSourcesInfo;