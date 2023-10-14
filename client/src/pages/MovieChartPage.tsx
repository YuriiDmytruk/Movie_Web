import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { Button } from '@mui/material';

import {
  MovieCardStyled,
  ButtonGroup,
  ChartContainer,
  ChartInContainer,
} from '../styled/MovieChart';

import { MovieStateType } from '../../types';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MovieChartPage: React.FC = () => {
  const [isBarSelected, setIsBarSelected] = useState(true);
  const movies = useSelector((state: MovieStateType) => state.movies);

  const createDataForPie = () => {
    let genreCounts: { [key: string]: number } = {};
    movies.forEach((movie) => {
      movie.genres.forEach((genre) => {
        if (genreCounts.hasOwnProperty(genre.name)) {
          genreCounts[genre.name]++;
        } else {
          genreCounts[genre.name] = 1;
        }
      });
    });

    const colors = createColors(Object.values(genreCounts).length);
    return {
      labels: Object.keys(genreCounts),
      datasets: [
        {
          label: 'Films with # genre',
          data: Object.values(genreCounts),
          backgroundColor: colors.backgroundColors,
          borderColor: colors.borderColors,
          borderWidth: 1,
        },
      ],
    };
  };

  const createDataForBar = () => {
    const labels = ['Genre'];
    let genreBudgets: Record<string, number> = {};
    movies.forEach((movie) => {
      movie.genres.forEach((genre) => {
        const genreName = genre.name;
        const budget = movie.budget;
        if (!genreBudgets[genreName]) {
          genreBudgets[genreName] = 0;
        }
        genreBudgets[genreName] += budget;
      });
    });
    return {
      labels: labels,
      datasets: Object.keys(genreBudgets).map((genre) => {
        return {
          label: genre,
          data: labels.map(() => genreBudgets[genre]),
          backgroundColor: createColors(1).backgroundColors[0],
        };
      }),
    };
  };

  const createColors = (amount: number) => {
    let backgroundColors = [];
    let borderColors = [];

    let firstColor, secondColor, thirdColor;

    for (let i = 0; i < amount; i++) {
      firstColor = getRandom0_255();
      secondColor = getRandom0_255();
      thirdColor = getRandom0_255();
      backgroundColors.push(
        `rgba(${firstColor}, ${secondColor}, ${thirdColor}, 0.2)`
      );
      borderColors.push(
        `rgba(${firstColor}, ${secondColor}, ${thirdColor}, 1)`
      );
    }
    return { backgroundColors: backgroundColors, borderColors: borderColors };
  };

  const getRandom0_255 = () => Math.floor(Math.random() * 256);

  return (
    <MovieCardStyled data-testid="chart-page">
      <ButtonGroup>
        <Button variant="contained" onClick={() => setIsBarSelected(false)}>
          Check popularity of genres
        </Button>
        <Button variant="contained" onClick={() => setIsBarSelected(true)}>
          Check budget of genres
        </Button>
      </ButtonGroup>
      <ChartContainer>
        <ChartInContainer>
          {isBarSelected ? (
            <Bar data={createDataForBar()} />
          ) : (
            <Pie data={createDataForPie()} />
          )}
        </ChartInContainer>
      </ChartContainer>
    </MovieCardStyled>
  );
};

export default MovieChartPage;
