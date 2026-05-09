'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import styles from './InteractiveMap.module.css';

const geoUrl = "/states-10m.json";

const licensedStates: Record<string, string> = {
  "Wisconsin": "wisconsin",
  "Illinois": "illinois",
  "Iowa": "iowa",
  "Minnesota": "minnesota",
  "Michigan": "michigan",
  "Florida": "florida",
  "Texas": "texas",
  "Colorado": "colorado",
  "North Dakota": "north-dakota",
  "South Dakota": "south-dakota",
  "Washington": "washington"
};

export default function InteractiveMap() {
  const router = useRouter();

  const handleStateClick = (geo: any) => {
    const stateName = geo.properties.name;
    if (licensedStates[stateName]) {
      router.push(`/locations/${licensedStates[stateName]}`);
    }
  };

  return (
    <div className={styles.mapContainer}>
      <ComposableMap projection="geoAlbersUsa" width={800} height={500}>
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => {
              const stateName = geo.properties.name;
              const isLicensed = !!licensedStates[stateName];
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleStateClick(geo)}
                  style={{
                    default: {
                      fill: isLicensed ? 'var(--gold-main)' : '#e0e6ed',
                      stroke: '#ffffff',
                      strokeWidth: 0.75,
                      outline: 'none',
                      cursor: isLicensed ? 'pointer' : 'default',
                      transition: 'all 0.2s ease',
                    },
                    hover: {
                      fill: isLicensed ? 'var(--gold-dark)' : '#e0e6ed',
                      stroke: '#ffffff',
                      strokeWidth: 1,
                      outline: 'none',
                      cursor: isLicensed ? 'pointer' : 'default',
                    },
                    pressed: {
                      fill: isLicensed ? 'var(--primary)' : '#e0e6ed',
                      stroke: '#ffffff',
                      strokeWidth: 1,
                      outline: 'none',
                    }
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
