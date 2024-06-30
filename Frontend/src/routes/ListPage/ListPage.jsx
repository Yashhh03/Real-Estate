import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import "./ListPage.scss";
import Map from "../../components/Map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

export default function ListPage() {
  const data = useLoaderData();

  return (
    <div className="ListPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading....</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => {
                  <Card key={post.id} item={post} />;
                })
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer">
        <Suspense fallback={<p>Loading....</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}
