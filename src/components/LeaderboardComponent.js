'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function LeaderboardComponent() {
  const [searchTerm, setSearchTerm] = useState('');

  const allPlayers = [
    { rank: 1, name: 'Alex Johnson', points: 12500, quizzes: 45, avatar: '👨‍💼', trending: 'up' },
    { rank: 2, name: 'Sarah Williams', points: 11200, quizzes: 42, avatar: '👩‍💼', trending: 'down' },
    { rank: 3, name: 'Mike Chen', points: 10800, quizzes: 38, avatar: '👨‍🎓', trending: 'up' },
    { rank: 4, name: 'Emma Davis', points: 9500, quizzes: 35, avatar: '👩‍💻', trending: 'up' },
    { rank: 5, name: 'John Smith', points: 8900, quizzes: 32, avatar: '👨‍💻', trending: 'down' },
    { rank: 6, name: 'Lisa Anderson', points: 8200, quizzes: 30, avatar: '👩‍🎨', trending: 'stable' },
    { rank: 7, name: 'David Brown', points: 7800, quizzes: 28, avatar: '👨‍🔬', trending: 'up' },
    { rank: 8, name: 'Rachel Green', points: 7200, quizzes: 25, avatar: '👩‍🔬', trending: 'down' },
    { rank: 9, name: 'Tom Wilson', points: 6800, quizzes: 24, avatar: '👨‍⚕️', trending: 'stable' },
    { rank: 10, name: 'Jennifer Lee', points: 6300, quizzes: 22, avatar: '👩‍⚕️', trending: 'up' },
  ];

  const filteredPlayers = allPlayers.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const PlayerRow = ({ player, isTopThree }) => (
    <div
      className={`flex items-center gap-4 p-4 rounded-lg border-2 ${
        isTopThree ? 'border-primary/50 bg-primary/5' : 'border-border'
      } hover:border-primary/30 transition`}
    >
      {/* Rank & Avatar */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary min-w-12">
          {isTopThree && player.rank === 1 && '🏆'}
          {isTopThree && player.rank === 2 && '🥈'}
          {isTopThree && player.rank === 3 && '🥉'}
          {!isTopThree && player.rank}
        </div>
        <span className="text-3xl">{player.avatar}</span>
      </div>

      {/* Name & Stats */}
      <div className="flex-1">
        <h3 className="font-semibold text-foreground">
          {player.name}
        </h3>
        <p className="text-sm text-foreground/70">
          {player.quizzes} quizzes completed
        </p>
      </div>

      {/* Points */}
      <div className="text-right">
        <div className="text-2xl font-bold text-primary">
          {player.points.toLocaleString()}
        </div>
        <p className="text-xs text-foreground/70">Points</p>
      </div>

      {/* Trending */}
      <div className="flex-shrink-0">
        {player.trending === 'up' && (
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full flex items-center gap-1">
            <TrendingUp size={14} /> Up
          </span>
        )}
        {player.trending === 'down' && (
          <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
            ↓ Down
          </span>
        )}
        {player.trending === 'stable' && (
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
            → Stable
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Global Leaderboard
          </h1>
          <p className="text-foreground/70 text-lg">
            Compete with players from around the world and climb the ranks
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/50" size={20} />
            <Input
              placeholder="Search players..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Players</TabsTrigger>
            <TabsTrigger value="weekly">This Week</TabsTrigger>
            <TabsTrigger value="monthly">This Month</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3">
            {filteredPlayers.length > 0 ? (
              filteredPlayers.map((player) => (
                <PlayerRow
                  key={player.rank}
                  player={player}
                  isTopThree={player.rank <= 3}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-foreground/70">No players found matching &quot;{searchTerm}&quot;</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="weekly" className="space-y-3">
            {allPlayers.slice(0, 5).map((player) => (
              <PlayerRow
                key={player.rank}
                player={player}
                isTopThree={player.rank <= 3}
              />
            ))}
          </TabsContent>

          <TabsContent value="monthly" className="space-y-3">
            {allPlayers.map((player) => (
              <PlayerRow
                key={player.rank}
                player={player}
                isTopThree={player.rank <= 3}
              />
            ))}
          </TabsContent>
        </Tabs>

        {/* Info Card */}
        <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-primary/20">
          <h3 className="font-semibold text-foreground mb-4">💡 Leaderboard Tip</h3>
          <p className="text-foreground/70">
            The more quizzes you complete and the higher your accuracy, the faster you&apos;ll climb the leaderboard. Compete with friends and earn exclusive rewards!
          </p>
        </Card>
      </div>
    </div>
  );
}
