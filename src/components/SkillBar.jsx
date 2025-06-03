
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const SkillBar = ({ name, level, index }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className={cn(
            "h-full rounded-full",
            level > 85 ? "bg-primary" : level > 70 ? "bg-blue-500" : "bg-indigo-500"
          )}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
